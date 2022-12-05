export function uiReducer(isLoading = false, action:any) {
    switch (action.type) {
     
    case 'TOGGLE_LOADING':
      return action.payload;
  
      default:
        return isLoading;
    }
  }