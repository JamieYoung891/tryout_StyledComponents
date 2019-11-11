const FILTER_ACTION = {
  PUT: {
    LIST: "filter/put/list",
    ITEM: "filter/put/item",
  }
}

export const updateFilter = {
  list: () => ({ type: FILTER_ACTION.PUT.LIST }),
  item: (isList, payload) => ({ type: FILTER_ACTION.PUT.ITEM, isList, payload })
}

const initialState = {
  list: false,
  item: "0"
}

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case FILTER_ACTION.PUT.LIST:
      return {
        list: true,
        item: state.item
      }
    case FILTER_ACTION.PUT.ITEM:
      return {
        list: action.isList,
        item: action.payload
      }
    default:
      return state
  }
}