export enum ListActionType {
	setItems = "SET_ITEMS",
	addItem = "ADD_ITEM",
	delItem = "DEL_ITEM",
	clearAllItems = "CLEAR_ITEMS",
	loadItems = "LOAD_ITEMS",
}
export const loadItems = {
	type: ListActionType.loadItems,
};

export function setItems(items: any) {
	return {
		type: ListActionType.setItems,
		payload: items,
	};
}

export function delItem(itemId: number) {
	return {
		type: ListActionType.delItem,
		payload: itemId,
	};
}

export function addItem(title: any) {
	return {
		type: ListActionType.addItem,
		payload: { title: title },
	};
}

export function clearAllItems() {
	return {
		type: ListActionType.clearAllItems,
	};
}
