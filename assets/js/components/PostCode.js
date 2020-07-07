import React from 'react';

class PostCode extends React.Component {
    constructor(props) {
        super(props);
        this.postReq = this.postReq.bind(this);
    }

    componentDidMount() {
        this.postReq();
    }

    postReq() {
        const { id, title, description, size, data, format, url } = this.props.postData;
        const sendData = {
            id,
            title,
            description,
            size,
            data,
            format,
            url
        }

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        }
        fetch('/api', options);
    }

    render() {
        console.log("From Post")
        return null
    }
}

export default PostCode;