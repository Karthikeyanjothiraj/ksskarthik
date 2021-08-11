import React from 'react';
import './CardDetail.css';
import { Draggable } from 'react-beautiful-dnd';


class CardDetail extends React.Component
{
    render(){
        const{ cardData, index }=this.props;
        console.log(cardData, 'card')
        return  ( 
            <Draggable draggableId={cardData.id} index={index}>
            {(provided) => (
                <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    < div className={`${cardData.isActive === true ? 'activeCard' : ''} card`} key={cardData.orderNo}
                    >
                        <div className="detailCard">
                            <div className="cardDetailed">
                                <div className="cardNo">{cardData.orderId}</div>
                                <div className="responseDue">Response due</div>
                            </div>
                            <div className="orderNo">
                                Order No: {cardData.orderNo}
                            </div>
                            <div className="items">
                                {cardData.items}
                            </div>
                            <div className="lowerData">
                                <div className="leftSegment">
                                    <span>DUE:</span>
                                    <span><b>{cardData.dueDate}</b></span>
                                </div>
                                <div className="rightSegment">
                                    <div>ASSIGNED TO</div>
                                    <div className="circle"></div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
                    )}

            </Draggable>
       );
    }
}
export default CardDetail;

