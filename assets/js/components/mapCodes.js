import React, { Fragment } from 'react'
import Code from './Code';

class mapCodes extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <Fragment>
                {this.props.codes.map( code => {
                    <Code code={code}/>
                })}
            </Fragment>
        );
    }
}

export default mapCodes;