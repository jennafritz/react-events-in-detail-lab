// Code DelayedButton Component Here

import {Component} from 'react' 
import React from 'react' 

class DelayedButton extends Component {
    render() {
        let clickEvent
        return( 
            <button
            onClick= { (event) => {
                clickEvent = event
                console.log(this.props.delay)
                setTimeout(this.props.onDelayedClick(clickEvent), this.props.delay)
        }
        }  >Delay</button>
        )
    }
}


export default DelayedButton 