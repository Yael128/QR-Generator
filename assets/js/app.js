import React from 'react';
import ReactDOM from 'react-dom';

import Form from './components/Form';

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
                    submited: false
                }
            ]
        }
    }
    render() {
        return (
            <Form />
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

console.log('Test');
