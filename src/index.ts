import React from "react";

export type TInitialState<T> = T;
export interface IState<state> {
  state?: Partial<TInitialState<state>>;
}

export default function useStateManager<state>(props: IState<state>) {
  const [get, set] = React.useState(props.state);
  return {
    GET: get,
    SET: set,
  };
}
