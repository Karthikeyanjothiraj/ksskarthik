import React from 'react';
import CardDetail from './CardDetail.js';
import './ListOrdered.css'
import { Draggable, Droppable } from 'react-beautiful-dnd';


class ListOrdered extends React.Component
{
    render(){
        const {
            list, index
        } =this.props;
        console.log(list,'liststt')
        return  (
            <Draggable draggableId={list.id} index={index}>
                {(provided) => (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className="column"
                    >
                        <div className="orderCount">{list.title}</div>
                        <Droppable droppableId={list.id}>
                            {(providedSub) => (
                                <div
                                    ref={provided.innerRef}
                                    className="cardWrap"
                                    {...providedSub.droppableProps}
                                >
                                    <div ref={providedSub.innerRef} className="cardList" {...providedSub.droppableProps}> 
                                        <div className="listOrdered">
                                        
                                            {list.title === "RECEIVED ORDERS" ? list.cards.map((data, keyIndex) => (
                                                                        <CardDetail cardData={data} key={data.id} index={keyIndex} />
                                                                    )) : null}  
                                            {list.title === "ORDER IN PROGRESS" ? list.cards.map((data, keyIndex) => (
                                                <CardDetail cardData={data} key={data.id} index={keyIndex} />
                                            )) : null} 
                                            {list.title === "ORDER IS READY FOR DELIVERY" ? list.cards.map((data, keyIndex) => (
                                                <CardDetail cardData={data} key={data.id} index={keyIndex} />
                                            )) : null}   
                                            {list.title === "ORDER PICK UP" ? list.cards.map((data, keyIndex) => (
                                                <CardDetail cardData={data} key={data.id} index={keyIndex} />
                                            )) : null}      
                                        </div>
                                    </div>
                                    {providedSub.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                )
                }
            </Draggable>
       );
    }
}
export default ListOrdered;
