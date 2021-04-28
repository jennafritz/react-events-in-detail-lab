// Code DelayedButton Component Here

import {Component} from 'react' 
import React from 'react' 

class DelayedButton extends Component {
    render() {
        return( 
        <button
        onClick= {
            console.log(this.props)
            
        }  ></button>
        )
    }
}





export default DelayedButton 