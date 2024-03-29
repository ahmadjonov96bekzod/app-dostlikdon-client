import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css'



import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import {rootReducer} from "./redux/reducers/rootReducer";
import './sass/indexjs.scss'

const store = createStore(rootReducer);


ReactDOM.render(
    <Provider store={store}>

        <App/>

    </Provider>

,document.getElementById('root'));
