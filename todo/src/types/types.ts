export interface Todo {
	id: number; //todo generate symbol id
	title: string;
}

export interface AppState {
	items: Todo[];
    isLoading: boolean  ;
	isTodoListVisible: boolean;
}
