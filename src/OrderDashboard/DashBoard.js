import React from 'react';
import Header from './Header';
import listOrder from './OrderList.json';
import ListOrdered from './ListOrdered';
import './DashBoard.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const listOfItems = [
    "list-1",
    "list-2",
    "list-3",
    "list-4"
  ];

class DashBoard extends React.Component
{
  constructor(props){
    super(props);
    this.state={
        isActive:'1',
        activeList:listOrder,
    }
}

onDragEnd = (result) => {
  const { activeList } = this.state;
  const { destination, source, draggableId, type } = result;
  if (!destination) {
    return;
  }
  if (type === 'list') {
    const newListIds = listOfItems;
    newListIds.splice(source.index, 1);
    newListIds.splice(destination.index, 0, draggableId);
    return;
  }
  const sourceList = activeList[source.droppableId];
  const destinationList = activeList[destination.droppableId];
  const draggingCard = sourceList.cards.filter(
    (card) => card.id === draggableId
  )[0];
  if (source.droppableId === destination.droppableId) {
    sourceList.cards.splice(source.index, 1);
    destinationList.cards.splice(destination.index, 0, draggingCard);
    this.setState({
      activeList: {
        ...activeList,
        [sourceList.id]: destinationList
      }
    });
  } else {
    sourceList.cards.splice(source.index, 1);
    destinationList.cards.splice(destination.index, 0, draggingCard);

    this.setState({
      activeList: {
        ...activeList,
        [sourceList.id]: sourceList,
        [destinationList.id]: destinationList,
      }
    });
  }
};


handleTabChange = (isActive) => {
    this.setState({ isActive });
  }
    render(){
      const { isActive, activeList }= this.state;
        return  ( 
            <div className="dashBoard">
              <Header
              handleTabChange={this.handleTabChange}
              isActive={isActive}
              />
              <div className="cardContent">
                <DragDropContext onDragEnd={this.onDragEnd}>
                  <Droppable droppableId="layout" type="list" direction="horizontal">
                    {(provided) => (
                      <div
                        className="dragList"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        {listOfItems.map((listId, index) => (
                          <ListOrdered list={activeList[listId]} key={listId} index={index} />
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            </div>
       );
    }
}
export default DashBoard;
