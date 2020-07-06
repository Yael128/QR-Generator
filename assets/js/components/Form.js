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
            submited: false,
            url: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        const { data, size, format} = this.state;
        const encodeData = encodeURI(data);
        this.setState({url: `http://api.qrserver.com/v1/create-qr-code/?data=${encodeData}&size=${size}x${size}&format=${format}`})
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState((prevState, props) =>{
            return {id: prevState.id + 1}
        });
        
        const { id, title, description, size, data, format, submited, url} = this.state;        

        this.props.addCode(id, title, description, size, data, format, submited, url)

    }

    render() {
        return (
            <Grid container style={{marginLeft: "100px"}}>
                <form onSubmit={this.handleSubmit}>
                    <Grid item xs={12} container spacing={3} justify="center">
                        <Grid item xs={3}>
                            <label>Title</label><br/>
                            <TextField
                            label="eg.200"
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
                            label="eg.200"
                            type="text"
                            name="description"
                            variant="outlined"
                            size="small"
                            value={this.state.description}
                            onChange={this.handleChange}
                            />
                        </Grid>

                        <Grid item xs={2}>
                            <label>Size</label><br/>
                            <TextField
                            label="eg.200"
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
                            label="eg.http://www.abcd.com,etc"
                            type="text"
                            name="data"
                            variant="outlined"
                            size="small"
                            value={this.state.data}    
                            onChange={this.handleChange}    
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container spacing={3} style={{paddingLeft: "30px"}}>
                        <Grid item xs={3}>
                            <label style={{paddingLeft: "25px"}}>Format</label><br/>
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