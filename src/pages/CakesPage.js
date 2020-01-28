import React, {useState} from "react";
import {connect} from "react-redux";

import {buyCake as buyCakeAction, buySandwich as buySandwichAction} from "../redux"
import NumberItemComponent from "../components/NumberItemComponent";

function CakePage(props) {
    const [number, setNumber] = useState(1);
    return (
        <div className="App">
            <h2>Cake Store</h2>
            <NumberItemComponent cake/>
            <input type="text" value={number} onChange={element => setNumber(element.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} cak</button>
        </div>
    );
}

// to access to the data.
const mapStateToProps = state => {
    return {
        numberOfCakes: state.cake.nbCake,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (nb = 1) => {
            dispatch(buyCakeAction(nb))
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(CakePage);
