import React from "react";
import {connect} from "react-redux"

function NumberItemComponent(props) {
    return (
        <div>
            <h3>Number {props.number}</h3>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemProps = ownProps.cake ? state.cake.nbCake : state.sandwich.nbSandwich;
    return {
        number: itemProps
    };
};

export default connect(mapStateToProps)(NumberItemComponent)
