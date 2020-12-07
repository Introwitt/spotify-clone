import React from 'react';
import './Body.css';
import {useDataLayerValue} from '../DataLayer';

function Body() {
    const [{theme, dispatch}] = useDataLayerValue();
    return (
        <div className = 'body' id = {theme}>
            <h1>This is body</h1>
        </div>
    )
}

export default Body
