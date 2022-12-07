import { toggleLoading } from "../actions/ui.actions";
import { ListActionType, setItems } from "../actions/list.actions";
import { AppState } from "../types/types";
import { store as Store } from "../store/store";
export const api = (store: any) => (next: any) => (action: any) => {
	if (action.type === ListActionType.loadItems) {
		store.dispatch(toggleLoading(true));
		fetch("https://jsonplaceholder.typicode.com/todos")
			.then((results) => results.json())
			.then((items) => {
				store.dispatch(toggleLoading(false));
				console.log(Store.getState());
				store.dispatch(setItems(items));
			});
	} else {
		next(action);
	}
};
