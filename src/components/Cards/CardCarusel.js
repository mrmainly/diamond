import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 340,
        borderRadius: 5,
        minHeight: 550,
        margin: '0 auto'
    },
    cover: {
        height: 200,
    },
    mainContent: {
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'column',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 7,
        paddingBottom: 7,
    },
    titleBox: {
        wordWrap: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center'
    },
    descriptionBlock: {
        wordWrap: 'break-word',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: 10,
        height: 100,
        marginTop: 20
    },
    priceBlock: {
        display: 'flex',
    },
    actionBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        borderTop: '2px solid rgba(0, 0, 0, 0.25)',
        paddingTop: 10,
        marginTop: 10
    },
    carBlock: {
        height: 80
    }
}));

export default function CardCarusel(props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Grid container>
                <Grid item lg={12} sm={12} md={12} xl={12} xs={12}>
                    <CardMedia
                        className={classes.cover}
                        alt="Contemplative Reptile"
                        image={props.photo ? props.photo : '/image/XVP.jpg'}
                        title="Contemplative Reptile"
                    />
                </Grid>
                <Grid item lg={12} sm={12} md={12} xl={12} xs={12} className={classes.mainContent}>
                    <Box className={classes.titleBox}>
                        <Typography variant="h5">{props.title}</Typography>
                    </Box>
                    <Box className={classes.descriptionBlock}>
                        <Typography variant="h6">{props.description}</Typography>
                    </Box>
                    <Box className={classes.carBlock}>
                        <Typography variant="h6" style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{props.carName}</Typography>
                    </Box>
                    <Box className={classes.priceBlock}>
                        <Typography variant="h5">От: </Typography>&nbsp;
                        <Typography variant="h5">{props.price} ₽</Typography>
                    </Box>
                    <Box className={classes.actionBlock}>
                        <Button variant="contained" style={{ backgroundColor: '#8D6D25', color: 'white', height: 40 }} fullWidth>Узнать больше</Button>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    );
}