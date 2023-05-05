export type CounterType = {
  count: number;
};
export type optionType = "increment" | "decrement" | "reset";
export type ActionType = {
  type: optionType;
  payload: any | undefined | null;
};



export const initialState: CounterType = {
  count: 0,
};

const counterReducer = (state: CounterType = initialState, action: ActionType): CounterType => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count+1,
      };
    case "decrement":
      if (state.count == 0) {
        console.log("count is 0 you cant decrement");
      }
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : state.count,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
