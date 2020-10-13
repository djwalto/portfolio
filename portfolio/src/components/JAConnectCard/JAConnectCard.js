import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Image1 from './jaconnect.png';


const useStyles = makeStyles({
    root: {
        minWidth: 400,
        minHeight: 275,
        backgroundImage: `url(${Image1})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        margin: 10,

    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function JAConnectCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>

            </CardContent>
            <CardActions>

            </CardActions>
        </Card>
    );
}