import React from 'react';
//import './controls.css'; // You can style the buttons here

export function Controls({ onUndo, onRedo, undoDisabled, redoDisabled }) {
    return (
        <div className="controls">
            <button  className = "btn-main" onClick={onUndo} disabled={undoDisabled}>Undo</button>
            <button  className = "btn-second" onClick={onRedo} disabled={redoDisabled}>Redo</button>
        </div>
    );
}