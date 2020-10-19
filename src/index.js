import React from 'react';
import ReactDOM from 'react-dom';
const { default: App } = require("./components/App");


ReactDOM.render (
    < App item="cats"
    text="You have no cats to trade for code!"
    placeholder="what else can you trade?" />,
    document.getElementById('root')
);