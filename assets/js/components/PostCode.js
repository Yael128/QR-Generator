import React from 'react';

class PostCode extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

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
        return null
    }
}

export default PostCode;