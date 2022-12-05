export function listReducer(items = [], action:any) {
    switch (action.type) {
   
     case 'SET_ITEMS':
       return action.payload;  
   
     case 'ADD_ITEM':
       return [...items, action.payload];
   
     case 'CLEAR_ITEMS':
       return [];
   
     default:
       return items;
    }
   }