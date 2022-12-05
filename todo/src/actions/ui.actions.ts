export function toggleLoading(flag: boolean) {
	return {
		type: "TOGGLE_LOADING",
		payload: flag,
	};
}
