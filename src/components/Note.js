import React, { useState, useEffect, useReducer, useContext } from 'react';
import NotesContext from '../context/notes-context';
import useMousePosition from '../hooks/useMousePosition';


const Note = ({ note }) => {
    const { dispatch } = useContext(NotesContext)
    const position = useMousePosition()

    useEffect(() => {
        console.log('Setting up effect!')

        return () => {
            console.log('Cleaning up effect!')
        }
    }, [])

    return (
        <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <p>{position.x} , {position.y}</p>
            <button onClick={() => dispatch({type: 'REMOVE_NOTE', title: note.title})}>x</button>
        </div>
    )
}

export { Note as default } 