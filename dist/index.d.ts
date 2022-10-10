import React from "react";
export declare type TInitialState<T> = T;
export interface IState<state> {
    state?: Partial<TInitialState<state>>;
}
export default function useStateManager<state>(props: IState<state>): {
    GET: Partial<state>;
    SET: React.Dispatch<React.SetStateAction<Partial<state>>>;
};
//# sourceMappingURL=index.d.ts.map