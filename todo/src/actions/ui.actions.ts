export function toggleLoading(flag: boolean) {
	return {
		type: UiActionType.TOGGLE_LOADING,
		payload: flag,
	};
}

export function toggleTodoList(flag: boolean) {
	return {
		type: UiActionType.TOGGLE_TODO_LIST,
		payload: flag,
	};
}

export function loadingFailed(errorMessage: string) {
	return {
		type: UiActionType.LOADING_FAILED,
		payload: errorMessage,
	};
}

export enum UiActionType {
	TOGGLE_LOADING = "TOGGLE_LOADING",
	TOGGLE_TODO_LIST = "TOGGLE_TODO_LIST",
	LOADING_FAILED = "LOADING_FAILED",
}

export type UiAction =
	| ReturnType<typeof toggleLoading>
	| ReturnType<typeof toggleTodoList>
	| ReturnType<typeof loadingFailed>;
