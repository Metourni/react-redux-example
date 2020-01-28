import React, {useEffect} from "react"
import {connect} from "react-redux";
import {fetchDataFromServer} from "../redux";

function ServerDataPage(props) {
    useEffect(() => {
        props.fetchData()
    }, []);

    return props.loading ?
        (
            <h3>Loading...</h3>
        )
        :
        props.error ?
            (
                <h4>
                    Server error : {props.error}
                </h4>
            )
            :
            (
                <div>
                    <h2>Data list</h2>
                    <ul>
                        {props && props.dataList && props.dataList.map(raw => <li>{raw}</li>)}
                    </ul>
                </div>
            );
}

const mapStateToProps = (state) => {
    return {
        loading: state.serverData.loading,
        dataList: state.serverData.data,
        error: state.serverData.error,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(fetchDataFromServer())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerDataPage);
