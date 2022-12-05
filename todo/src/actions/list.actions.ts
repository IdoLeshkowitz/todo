export const loadItems = {
    type: 'LOAD_ITEMS'
  }
  
  export function setItems(items : any) {
    return {
      type: 'SET_ITEMS',
      payload: items
    }
  }

  export function delItem(itemId:number){
    return {
      type: 'DEL_ITEM',
      payload: itemId
    }
  }
  
  export function addItem(title : any) {
    return {
      type: 'ADD_ITEM',
      payload: { title: title }
    }
  }
  
  export function clearAllItems() {
    return {
      type: 'CLEAR_ITEMS',
    }
  }
  