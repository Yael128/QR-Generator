import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Form from './components/Form';
import mapCodes from './components/mapCodes';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codes: [
                {
                    id: 0,
                    title: null,
                    description: null,
                    size: null,
                    data: null,
                    format: null,
                    submited: false,
                    url: null
                }
            ]
        }
        this.addCode = this.addCode.bind(this);
    }

    // add new codes
    addCode(id, title, description, size, data, format, submited, url) {
        const newCode = {
            id,
            title,
            description,
            size,
            data,
            format,
            submited: true,
            url
        }
        this.setState({
            codes: [...this.state.codes, newCode]
        })
    }

    render() {
        return (
            <Fragment>
                <Form addCode={this.addCode}/>
                <MapCodes codes={this.state.codes}/>
            </Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

console.log('Test');
