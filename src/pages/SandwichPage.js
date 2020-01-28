import React from "react";
import {connect} from "react-redux";

import {buySandwich as buySandwichAction} from "../redux"

function SandwichPage(props) {
    return (
        <div className="App">
            <h2>Sandwich Store</h2>
            <h3>{props.numberOfSandwich}</h3>
            <button onClick={()=>props.buySandwich(1)}>Buy cake</button>
        </div>
    );
}

// to access to the data.
const mapStateToProps = state => {
    return {
        numberOfSandwich: state.sandwich.nbSandwich,
    }
};

// to get access to
const mapDispatchToProps = (dispatch) => {
    return {
        buySandwich: (nb = 1) => {
            dispatch(buySandwichAction(nb))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SandwichPage);
