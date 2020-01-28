import React from 'react';
import {Provider} from 'react-redux';

import store from "./redux/store";

import './App.css';
import CakePage from "./pages/CakesPage";
import HooksCakePage from "./pages/HooksCakePage";
import SandwichPage from "./pages/SandwichPage";
import ServerDataPage from "./pages/ServerDataPage";


function App() {
    return (
        <Provider store={store}>
            <ServerDataPage/>
            <SandwichPage/>
            <HooksCakePage/>
            <CakePage/>
        </Provider>
    );
}


export default App;
