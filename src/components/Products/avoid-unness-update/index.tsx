import React from "react";
import { IncrementAction } from "../../../store/features/counter/counterActions";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hook";

export default function AvoidUpdate () {
    const count = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();
    return (
        <div id='avoidUpdate'>
            <span>{count}</span>
            {/* <button onClick={e=>{dispatch(IncrementAction())}}>add</button> */}
        </div>
    );
}
