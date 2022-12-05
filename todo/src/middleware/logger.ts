export const logger = (store:any) => (next:any) => (action:any) => {
    const currentStateBeforeAction = store.getState();
    const dispatchedAction = action;
  
    next(action);
  
    const currentStateAfterAction = store.getState();
  
    console.group('LOGGER');
    console.log(`ACTION`, dispatchedAction);
    console.log(`PRE STATE:`, currentStateBeforeAction);
    console.log(`NEXT STATE:`, currentStateAfterAction);
    console.groupEnd();
  };
  