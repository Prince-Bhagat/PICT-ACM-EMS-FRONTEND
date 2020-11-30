import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import { Grid } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link, Switch, Route, useHistory, useRouteMatch, useParams } from 'react-router-dom';
import AllEvent from './AllEvent';
import AddEvent from './AddEvent';

function ManageCategory(props) {

  let { path, url } = useRouteMatch();

  return (

    <div>

      <Switch>
        <Route exact path={url}>
          <Grid
            container
            direction="row-reverse"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Button
              variant="contained"
              color="default"
              
              startIcon={<AddCircleIcon />}
            >
              <Link to={`${url}/add`}>Add Category</Link>
            </Button>
          </Grid>

          <AllEvent></AllEvent>
        </Route>

        <Route path={`${url}/add`}>
          <AddEvent></AddEvent>

        </Route>
      </Switch>
    </div>
  );
}

export default ManageCategory;


