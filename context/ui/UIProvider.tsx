import { FC, ReactNode, useReducer } from "react";
import { UIContext } from "./UIContext";

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

        const [state, dispatch] = useReducer(first, UI_INITIAL_STATE)

    return (
        <UIContext.Provider value={{
            sidemenuOpen: false
        }}>
            { children }
        </UIContext.Provider>
    )
}