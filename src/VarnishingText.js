import React from 'react';
import { directive } from '@babel/types';

export default class VarnishingText extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            hasVarnished: false,
        }
    }

    toggleHasVarnished () {
        this.setState((currentState) => ({
            hasVarnished: !currentState.hasVarnished,
        }));
    }

    render () {
        return (
            <div>
                <button onClick={()=> this.toggleHasVarnished()}>Make Text Disappear</button>
                <br/>
                {!this.state.hasVarnished && this.props.text}
            </div>
        );
    }
}