import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from'./reducers';
import App from "./routes/App";
import Content from './data/content.json';

const initialState = Content
const store = createStore(reducer, initialState);

ReactDom.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById("app"))