import React from 'react'
import './ThemeSwitch.css';
import {useDataLayerValue} from '../DataLayer'; 

function ThemeSwitch() {

    const [{theme}, dispatch] = useDataLayerValue();

    const handleClick = () => {

        if(theme==='green'){
            dispatch({
                type: 'SET_THEME',
                theme: 'blue',
            })
        }
        else{
            dispatch({
                type: 'SET_THEME',
                theme: 'green',
            })
        }
        
    }
    return (
        <div className = 'themeswitch'>
           <input type = 'checkbox' id = 'toggle' className = 'themeswitch__checkbox' onClick = {handleClick} />
           <label for ='toggle' className= 'themeswitch__switch' />
        </div>
    )
}

export default ThemeSwitch
