import { isConstructorDeclaration } from "typescript";
import { AppState, Todo } from "../types/types";
import { ListActionType } from "../actions/list.actions";
export function listReducer(items: Todo[] = [], action: any): Todo[] {
	switch (action.type) {
		case ListActionType.setItems: {
			return action.payload;
		}
		case ListActionType.addItem:
			return [...items, action.payload];

		case ListActionType.clearAllItems:
			return [];

		case ListActionType.delItem:
			return items.filter((item: Todo) => item.id !== action.payload);
		default:
			return items;
	}
}
