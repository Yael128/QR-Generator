import React from 'react';

class APIcall extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{padding: "10px 0 10px 0"}}>
                <img id="codeImg" src={this.props.url} width="200px" alt="qr-code-img" style={{borderStyle: "solid"}}></img>
            </div>
            
        );
    }
}

export default APIcall;