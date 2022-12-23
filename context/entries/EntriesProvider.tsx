import { FC, ReactNode, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';
import { entriesReducer, EntriesContext } from './';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Lorem ipsum sit allat dolls duis',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description: 'En progreso: Lorem ipsum sit allat dolls duis',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            _id: uuidv4(),
            description: 'Finalizada: Lorem ipsum sit allat dolls duis',
            status: 'finished',
            createdAt: Date.now() - 100000
        },
        
    ]
}

interface Props {
    children: ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE)

    const addNewEntry = ( description: string ) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: '[Entry] Add-Entry', payload: newEntry })
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry
        }}>
            { children }
        </EntriesContext.Provider>
    )
}