import React from 'react';
import {Draggable} from "react-beautiful-dnd";

const Element = ({item,index}) => {
    return (
        <div>
            <Draggable
                key={item.id}
                draggableId={item.id}
                index={index}
            >
                {(provided, snapshot) => {
                    return (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className='task'
                            style={{
                                backgroundColor: snapshot.isDragging
                                    ? "#263B4A"
                                    : "#456C86",
                                ...provided.draggableProps.style
                            }}
                        >
                            {item.content}
                        </div>
                    );
                }}
            </Draggable>
        </div>
    );
};

export default Element;
