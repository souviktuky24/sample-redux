import { createStore, combineReducers, Store, Reducer } from "redux";
import rotateReducer from "../reducer/rotateReducer";
import { IStartAction } from '../types/IStartAction';

export interface IState {
    rotating: boolean
}

const reducer = combineReducers({ rotateReducer });
const store: Store<IState, IStartAction> = createStore(reducer, {});

export type IDispatch = typeof store.dispatch

export default store;