import { IState } from '../store/store';
const rootReducer = (state : IState = { rotating: false }, action: any) => {
    console.log("state, action", state, action)
    switch(action.type) {
        case "rotate":
            return {
                rotating: action.payload
            };
        default:
            return state;
    }
};

export default rootReducer;