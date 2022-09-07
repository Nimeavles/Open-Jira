import { FC, ReactNode, useReducer } from 'react';
import { uiReducer, UIContext } from './';

export interface UIState {
    sidemenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
}

interface Props {
    children: ReactNode;
}

export const UIProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE)

    const openSideMenu = () => {
        dispatch({ type: 'UI - Open SideBar' });
    }

    const closeSideMenu = () => {
        dispatch({ type: 'UI - Close SideBar' });
    }

    return (
        <UIContext.Provider value={{
            ...state,
            openSideMenu,
            closeSideMenu
        }}>
            { children }
        </UIContext.Provider>
    )
}