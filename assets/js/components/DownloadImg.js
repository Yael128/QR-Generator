import React from 'react';
import { Button } from '@material-ui/core';

class DownloadImg extends React.Component {
    constructor(props) {
        super(props);
        this.downloadCode = this.downloadCode.bind(this);
    }

    downloadCode() {
        fetch(this.props.code.url)
        .then(req => req.blob())
        .then(res => {
            const urlCode = window.URL.createObjectURL(res);
            const a = document.createElement('a');
            a.href = urlCode;
            a.download = 'CodeImg.' + this.props.code.format;
            a.click();
        })
    }

    render() {
        return (
            <Button
                style={{marginTop: "50px"}}
                color="primary"
                variant="contained"
                onClick={this.downloadCode}
            >Download</Button>
        );
    }
}

export default DownloadImg;