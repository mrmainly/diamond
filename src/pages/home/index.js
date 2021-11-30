import React from 'react'

import { Container, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import FirstScreen from './components/FirstScreen'
import SecondScreen from './components/SecondScreen'
import ThreeScreen from './components/ThreeScreen'
import FeedBackScreen from './components/FeedBackScreen'

const useStyles = makeStyles(() => ({
    titleBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20
    },
    titleBox2: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 20,
        backgroundColor: 'rgba(0, 36, 46, 1)',
        color: 'white',
    }
}))

const Home = () => {
    const classes = useStyles()
    return (
        <Box >
            <FirstScreen />
            <SecondScreen />
            <Box className={classes.titleBox}>
                <Typography variant="body2">Закажите консьерж-сервис сейчас или свяжитесь с нами для получения подробностей</Typography>
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>ЗАКАЖИТЕ УСЛУГУ</Typography>
            </Box>
            <ThreeScreen />
            <Box className={classes.titleBox2}>
                <Typography variant="body2">СВЯЖИТЕСЬ С НАМИ ОНЛАЙН</Typography>
                <Typography variant="h5" style={{ fontWeight: 'bold' }}>ФОРМА ОБРАТНОЙ СВЯЗИ</Typography>
            </Box>
            <FeedBackScreen />
        </Box>
    )
}

export default Home