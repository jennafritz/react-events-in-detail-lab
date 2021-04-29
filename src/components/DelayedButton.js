// Code DelayedButton Component Here

import {Component} from 'react' 
import React from 'react' 

class DelayedButton extends Component {
    
    
    render() {
        return( 
            <button onClick={(event) => {
                event.persist()
                let clickEvent = event
                setTimeout(() => this.props.onDelayedClick(clickEvent), this.props.delay)
            }}
            >Delay</button>
          )}
    }


export default DelayedButton 