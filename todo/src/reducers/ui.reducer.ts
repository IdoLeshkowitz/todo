import { UiAction, UiActionType } from "../actions/ui.actions";
import { AppState } from "../types/types";

export function uiReducer(isLoading: boolean = false, action: UiAction) {
	switch (action.type) {
		case UiActionType.TOGGLE_LOADING: {
			return action.payload;
		}
		default:
			return isLoading;
	}
}
