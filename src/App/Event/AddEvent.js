import React, { useState, useEffect } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import $ from 'jquery';
import {URL} from '../Common/Constants/Constants';


function AddEvent(props) {
    const [ data, setData ] = useState({
        id : "",
        name : "",
        description : ""
    });
    const [ count, setCount ] = useState(0);
    const history = useHistory();
    

    const useStyles = makeStyles((theme) => ({
        list : {
            [theme.breakpoints.down('md')] : {
                width : "100%"
            },
            [theme.breakpoints.up('md')] : {
                width : 400
            }
        },
        button : {

        }
    }));
    const classes = useStyles();

    // =================    Function    ======================

    function handleName(event)
    {
        let dataCopy = JSON.parse(JSON.stringify(data));
        dataCopy.name = event.target.value;
        setData(dataCopy);
    }

    function handleDescription(event)
    {
        let dataCopy = JSON.parse(JSON.stringify(data));
        dataCopy.description = event.target.value;
        setData(dataCopy);
    }

    function handleSubmit()
    {
        // Submit data
        $.post(
            "http://localhost:8000/admin/events",
            data,
            function(data,status){
                console.log(status)
                history.push("/event")
            }
        )
    }


    

    return (
        <div>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Paper elevation={10}>
                    <form>
                    <List className={classes.list}>
                        <ListItem>
                        <Typography> Add Event</Typography>
                        </ListItem>
                        <ListItem>
                            
                            <TextField  
                                fullWidth
                                required
                                id = "name"
                                label = "Name"    
                                value = {data.name}
                                onChange={handleName}
                            />
                        </ListItem>
                        <ListItem>
                            <TextField 
                                fullWidth
                                required
                                id = "description"
                                label = "Description"
                                value = {data.description}
                                onChange = {handleDescription}
                            />
                        </ListItem>
                        <ListItem alignItems="center">
                            <Button
                                variant="contained"
                                color="primary"
                                onClick = {handleSubmit}
                            >Add</Button>
                        </ListItem>
                    </List>
                    </form>
                </Paper>

            </Grid>
        </div>
    );
}

export default withRouter(AddEvent);