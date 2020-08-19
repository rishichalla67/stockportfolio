import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Menu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: "forestgreen"}}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color='inherit' aria-label="menu" component={ Link } to="/">
                        <AccountBalanceIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title} style={{fontSize: 30, alignContent: "center"}}>
                        Stock Tracker
                    </Typography>
                    <Button color="inherit" style={{fontWeight: "bold"}}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
