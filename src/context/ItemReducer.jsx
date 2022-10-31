// Hard set actions rather than just strings
export const ACTIONS = {
  GET_ITEMS: 'GET_ITEMS',
  GET_FAIL: 'GET_FAIL',
  ADD_ITEM: 'ADD_ITEM',
};

// Initial State for Application
export const INITIAL_STATE = {
  items: null,
  loading: true,
  error: false,
};

// Item Reducer used in ItemContext
const ItemReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.GET_ITEMS:
      return {
        items: action.payload,
        loading: false,
        error: false,
      };
    case ACTIONS.GET_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ACTIONS.ADD_ITEM:
      return {
        items: [action.payload, ...state.items],
        loading: false,
        error: false,
      };
    case ACTIONS.DELETE_ITEM:
      return {
        items: [...action.payload],
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default ItemReducer;
