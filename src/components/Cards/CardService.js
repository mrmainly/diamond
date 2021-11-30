import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, CardActionArea } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '3px solid #FFFFFF',
        flexDirection: 'column',
        height: 220,
        width: 300,
        marginTop: 30,
        textAlign: 'center',
        borderRadius: 5
    }
}))

const CardService = (props) => {
    const classes = useStyles()
    return (
        <CardActionArea className={classes.root}>
            <Typography variant="h6">{props.title}</Typography>
            <Typography variant="body1" style={{ marginTop: 10 }}>{props.description}</Typography>
        </CardActionArea>
    )
}

export default CardService