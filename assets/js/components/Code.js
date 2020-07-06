import React, { Fragment } from 'react';
import { Grid, Divider } from '@material-ui/core';

class Code extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { id, title, description, submited } = this.props.code;
        console.log(submited);
        return (
            <Fragment>
                {submited ? 
                <Grid container item xs={12} direction={id%2 === 0 ? "row" : "row-reverse"}>
                    <Grid item xs={3}>
                        {/*Create component for img*/}
                    </Grid>
                    <Grid item xs={7}>
                        <h3>Title: {title}</h3> 
                        <p style={{marginBottom: "10px"}}>Description: <br/>{description}</p>
                    </Grid>
                    <Grid item xs={2}>
                        {/* Download Button */}
                    </Grid>                    
                </Grid> 
                : null}
                <Divider />
            </Fragment>
        );
    }
}

export default Code;