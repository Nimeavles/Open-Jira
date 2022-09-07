import { UIState } from ".";

type UIActionType = 
| { type: 'UI - Open SideBar' }
| { type: 'UI - Close SideBar' }

export const uiReducer = ( state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case 'UI - Open SideBar':
            return {
                ...state,
                sidemenuOpen: true,
            }

        case 'UI - Close SideBar':
            return {
                ...state,
                sidemenuOpen: false,
            }
    
        default:
           return state;
    }

}