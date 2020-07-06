import React from 'react';

class APIcall extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img id="codeImg" src={this.props.url} width="200px" alt="qr-code-img"></img>
        );
    }
}

export default APIcall;