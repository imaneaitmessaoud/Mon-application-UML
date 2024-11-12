// PropertiesPanel.js
import React, { useState } from 'react';

const PropertiesPanel = ({ selectedCell, updateCellStyle }) => {
    const [label, setLabel] = useState(selectedCell ? selectedCell.value : '');
    const [color, setColor] = useState('#ffffff');

    const handleLabelChange = () => {
        updateCellStyle('label', label);
    };

    const handleColorChange = (e) => {
        setColor(e.target.value);
        updateCellStyle('fillColor', e.target.value);
    };

    return (
        <div>
            <h3>Propriétés de l'élément</h3>
            <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Nom" />
            <button onClick={handleLabelChange}>Appliquer</button>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
};

export default PropertiesPanel;
