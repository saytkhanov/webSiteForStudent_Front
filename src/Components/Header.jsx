import React from "react";
import {
  Box,
  Container,
  Paper,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <Container maxWidth={"lg"}>
      <Paper elevation={5}>
        <Toolbar variant={"regular"}>
          <Typography
            color={"secondary"}
            variant={"h5"}
            classes={{ root: classes.root }}
          >
            BootCamp-Students
          </Typography>
          <Box>
            <Button>
              <NavLink to='/'>
                Главная
              </NavLink>
            </Button>
            <Button>
              Админка
            </Button>
            <NavLink to='/aboutUs'>
              <Button>
                О нас
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </Paper>
    </Container>
  );
}

export default Header;

//useLocationStorage;
//pathName
//if(pathName === /admin)
