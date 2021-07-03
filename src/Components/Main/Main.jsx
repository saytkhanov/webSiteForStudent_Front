import React from "react";
import { Route, Switch } from "react-router-dom";
import Students from "../Students";
import { Box, Button, Container, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Notes from '../Notes'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2)
  },
}));

function Main(props) {
  const classes = useStyles()
  return (
    <div>
      <Container maxWidth={"lg"} classes={{root: classes.root}}>
        <Paper elevation={3}>
          <Grid container>
            <Switch>
              <Route path="/" exact>
                <Students />
              </Route>
              <Route path='/student/:id/note'>
                 <Notes/>
              </Route>
            </Switch>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default Main;
