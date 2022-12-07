//@ts-nocheck
import { combineReducers } from "redux";
import { listReducer } from "../reducers/list.reducer";
import { uiReducer } from "../reducers/ui.reducer";
import { logger } from "../middleware/logger";
import { api } from "../middleware/api";
import { AppState } from "../types/types";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	isLoading: false,
};

const rootReducer = combineReducers({
	isLoading: uiReducer,
	items: listReducer,
});

const middleware = [logger, api];
export const store = configureStore({ reducer: rootReducer, middleware: [...middleware] });
