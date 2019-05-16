import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import castle from './castle.jpg'
import castle_style from './castle_style.jpg'
import * as serviceWorker from './serviceWorker';

function Images(props) {
    return (
        <div className="row">
            <div className="column">
                <img src={props.content} alt="Snow" />
            </div>
            <div className="column">
                <img src={props.style} alt="Forest" />
            </div>
            <div className="column">
                <img src={props.output} alt="Mountains" />
            </div>
        </div>
    );
}

function App(props) {

    return(
        <div>
            <h2>Art Gerneration with Neural Style Transfer</h2>
            <hr />
            <text>
                Today we are going to apply machine learning (deep neural networks) to create art.
                We will transfer the style of one image to another.
            </text>
            <hr />
            <Images
                content={castle}
                style={castle_style}
                output={castle_style}
            />
        </div>
    );
}




ReactDOM.render( <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
