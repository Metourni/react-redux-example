import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {buyCake as buyCakeAction} from "../redux"

function HooksCakePage(props) {
    // access the state
    const numberOfCakes = useSelector((state) => {
        return state.cake.nbCake
    });
    // access to dispatch
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h2>Cake Store</h2>
            <h3>{numberOfCakes}</h3>
            <button onClick={() => dispatch(buyCakeAction(1))}>Buy cake</button>
        </div>
    );
}


export default HooksCakePage;
