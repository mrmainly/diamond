import React from 'react'

import { Box, Container, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { CaruselService } from '../../../components'

import cars from '../../../Json/cars'

const useStyles = makeStyles(() => ({
    wrapperContainer: {
        backgroundColor: 'rgba(0, 36, 46, 1)',
        minHeight: 1000,
        color: 'white',
        paddingBottom: 100
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    Cards: {
        marginTop: 20,
        display: 'flex',

    }

}))

const ThreeScreen = () => {
    const classes = useStyles()
    return (
        <div className={classes.wrapperContainer}>
            <Container style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <CaruselService data={cars} title="МАШИНЫ" />
                <CaruselService data={cars} title="ОТЕЛИ" />
            </Container>
        </div>
    )
}

export default ThreeScreen