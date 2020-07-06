import React, { Fragment } from 'react'
import Code from './Code';

class MapCodes extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <Fragment>
                {this.props.codes.map( code => (
                    <Code key={code.id} code={code}/>
                ))}
            </Fragment>
        );
    }
}

export default MapCodes;