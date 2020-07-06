import React from 'react';
import { Grid, TextField, Radio, Button } from '@material-ui/core';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: '',
            description: '',
            size: '',
            data: '',
            format: '',
            submited: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState((prevState, props) =>{
            return {id: prevState.id + 1}
        });
        
        const { id, title, description, size, data, format, submited} = this.state;
    }

    render() {
        return (
            <Grid container>
                <form onSubmit={this.handleSubmit}>
                    <Grid item xs={12} container spacing={3} justify="center">
                        <Grid item xs={3}>
                            <label>Title</label><br/>
                            <TextField
                            type="text"
                            name="title"
                            variant="outlined"
                            size="small"
                            value={this.state.title}
                            onChange={this.handleChange}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <label>Description</label><br/>
                            <TextField
                            type="text"
                            name="description"
                            variant="outlined"
                            size="small"
                            value={this.state.description}
                            onChange={this.handleChange}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <label>Size</label><br/>
                            <TextField
                            type="text"
                            name="size"
                            variant="outlined"
                            size="small"
                            value={this.state.size}
                            onChange={this.handleChange}
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <label>QR Content</label>
                            <TextField
                            type="text"
                            name="data"
                            variant="outlined"
                            size="small"
                            value={this.state.data}    
                            onChange={this.handleChange}    
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container spacing={3}>
                        <Grid item xs={3}>
                            <Radio
                            name="format"
                            size="small"
                            value="jpg"
                            checked={this.state.format === 'jpg'}
                            onChange={this.handleChange}
                            /><label>JPG</label>

                            <Radio
                            name="format"
                            size="small"
                            value="png"
                            checked={this.state.format === 'png'}
                            onChange={this.handleChange}
                            /><label>PNG</label>
                        </Grid>
                        {/* making some space*/}
                        <Grid item xs={6}></Grid>

                        <Grid item xs={3}>
                            <Button
                            type="submit"
                            value="Submit"
                            variant="contained"
                            color="primary"
                            >Create</Button>
                        </Grid>
                    </Grid>

                </form>
            </Grid>
        );
    }
}

export default Form;