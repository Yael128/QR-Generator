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
    }
    render() {
        return (
            <Grid container>
                <form>
                    <Grid item xs={12} container spacing={3} justify="center">
                        <Grid item xs={3}>
                            <label>Title</label><br/>
                            <TextField
                            type="text"
                            name="title"
                            variant="outlined"
                            size="small"
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <label>Description</label><br/>
                            <TextField
                            type="text"
                            name="description"
                            variant="outlined"
                            size="small"
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <label>Size</label><br/>
                            <TextField
                            type="text"
                            name="size"
                            variant="outlined"
                            size="small"
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <label>QR Content</label>
                            <TextField
                            type="text"
                            name="data"
                            variant="outlined"
                            size="small"        
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} container spacing={3}>
                        <Grid item xs={3}>
                            <Radio
                            name="format"
                            size="small"
                            value="jpg"
                            /><label>JPG</label>

                            <Radio
                            name="format"
                            size="small"
                            value="png"
                            /><label>PNG</label>
                        </Grid>
                        {/* making some space*/}
                        <Grid item xs={6}></Grid>

                        <Grid item xs={3}>
                            <Button
                            type="submit"
                            value="Submit"
                            variant="contained"
                            
                            >Create</Button>
                        </Grid>
                    </Grid>

                </form>
            </Grid>
        );
    }
}

export default Form;