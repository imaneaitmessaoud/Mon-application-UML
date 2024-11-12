import React from 'react';
import './Toolbox.css';

const Toolbox = () => {
    // Gestionnaire de début de glisser
    const handleDragStart = (event, elementType) => {
        event.dataTransfer.setData('elementType', elementType);
    };

    return (
        <div className="toolbox">
            <div
                className="toolbox-item"
                draggable
                onDragStart={(event) => handleDragStart(event, 'class')}
            >
                Classe
            </div>
            <div
                className="toolbox-item"
                draggable
                onDragStart={(event) => handleDragStart(event, 'interface')}
            >
                Interface
            </div>
            <div
                className="toolbox-item"
                draggable
                onDragStart={(event) => handleDragStart(event, 'entity')}
            >
                Entité
            </div>
        </div>
    );
};

export default Toolbox;
