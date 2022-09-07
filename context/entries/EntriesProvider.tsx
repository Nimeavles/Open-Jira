import { FC, ReactNode, useReducer } from 'react';
import { entriesReducer, EntriesContext } from './';

export interface EntriesState {
    entries: [];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}

interface Props {
    children: ReactNode;
}

export const EntriesProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer, Entries_INITIAL_STATE)

    return (
        <EntriesContext.Provider value={{
            ...state,
        }}>
            { children }
        </EntriesContext.Provider>
    )
}