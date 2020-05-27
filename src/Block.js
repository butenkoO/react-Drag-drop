import React from 'react';
import {Droppable} from "react-beautiful-dnd";
import Element from "./Element";

const Block = ({column,columnId}) => {
    return (
            <div
                className='column'
                key={columnId}
            >
                <h2>{column.name}</h2>
                <div className='task_block'>
                    <Droppable droppableId={columnId} key={columnId}>
                        {(provided, snapshot) => {
                            return (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    className='task_list'
                                    style={{
                                        background: snapshot.isDraggingOver
                                            ? "lightblue"
                                            : "lightgrey",
                                    }}
                                >
                                    {column.items.map((item, index) => {
                                        return <Element item={item} index={index} key={index}/>
                                    })}
                                    {provided.placeholder}
                                </div>
                            );
                        }}
                    </Droppable>
                </div>
            </div>
    );
};

export default Block;
