import React, { Fragment } from 'react';
import { Container, Grid, Divider } from '@material-ui/core';
import APIcall from './APIcall';
import DownloadImg from './DownloadImg';
import PostCode from './PostCode';

class Code extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { id, title, description, submited, url } = this.props.code;
        console.log(submited);
        return (
            <Container>
                {submited ? 
                <Grid container item xs={12} direction={id%2 === 0 ? "row" : "row-reverse"} alignContent='center' alignItems="center">
                    <Grid item xs={2}>
                        <APIcall url={url}/>
                    </Grid>
                    <Grid item xs={8} style={{padding: "0 15px 0 15px"}}>
                        <h3>Title: {title}</h3> 
                        <p style={{marginBottom: "10px"}} style={{textAlign: "justify"}} >Description: <br/>{description}</p>
                    </Grid>
                    <Grid item xs={2} style={{padding: "20px"}}>
                        <DownloadImg code={this.props.code}/>
                    </Grid>
                    <PostCode postData={this.props.code}/>           
                </Grid> 
                : null}
                <Divider />
            </Container>
        );
    }
}

export default Code;