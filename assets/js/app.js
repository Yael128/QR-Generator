import React from 'react';
import ReactDOM from 'react-dom';

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
        return 
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

console.log('Test');
