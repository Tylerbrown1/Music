export const initialState = {
  order: [],
  user: null,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_ORDER":
      return { ...state, order: [...state.order, action.item] };

    case "REMOVE_FROM_ORDER":
      let newOrder = [...state.order];

      const index = state.order.findIndex(
        (orderItem) => orderItem.id === action.id
      );

      if (index >= 0) {
        newOrder.splice(index, 1);
      } else {
        console.warn(
          `Cant remove trip (id: ${action.id}) as it is not in trips`
        );
      }

      return { ...state, order: newOrder };
    default:
      return state;
  }
}

export default reducer;
