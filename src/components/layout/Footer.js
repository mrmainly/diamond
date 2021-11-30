import React from 'react'

import { AppBar, Toolbar, Container, Grid, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 20,
    },
    boxInside: {
        margin: '0 auto',
        [theme.breakpoints.down('sm')]: {
            margin: '0px'
        },
    }
}))

const Footer = () => {
    const classes = useStyles()
    return (
        <AppBar position="static" style={{ background: 'rgba(0, 36, 46, 1)', minHeight: 400, display: 'flex', justifyContent: 'center' }}>
            <Toolbar >
                <Container >
                    <Grid container style={{ display: 'flex', justifyContent: 'center' }}>
                        <Grid item lg={6} xl={6} md={6} sm={12} xs={12} className={classes.box}>
                            <Typography variant="h6" style={{ color: '' }}>НАШИ КОНТАКТЫ</Typography>
                            <Typography variant="body1">Мы работаем 24/7. Пожалуйста свяжитесь с нами в любое удобное для вас время.</Typography>
                            <Typography variant="body1" style={{ marginTop: 20 }}>АДРЕС: МОСКВА-СИТИ, БАШНЯ "ИМПЕРИЯ" ПРЕСНЕНСКАЯ НАБЕРЕЖНАЯ 6, КОРПУС 2. ТЕЛЕФОН ОТДЕЛА ПРОДАЖ: +7 495 414 40 50 EMAIL: info@jetsettravelclub.com </Typography>
                        </Grid>
                        <Grid item lg={3} xl={3} md={3} sm={6} xs={12} className={classes.box}>
                            <Box className={classes.boxInside}>
                                <Typography variant="h6" style={{ color: '' }}>ПОЛИТИКА САЙТА</Typography>
                                <Typography variant="body1" style={{ marginTop: 20 }}>Политика Пофиденциальности</Typography>
                                <Typography variant="body1" style={{ marginTop: 20 }}>Пользовательское Соглашение</Typography>
                                <Typography variant="body1" style={{ marginTop: 20 }}>Условия Оплаты</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={3} xl={3} md={3} sm={6} xs={12} className={classes.box}>
                            <Box className={classes.boxInside}>
                                <Typography variant="h6" style={{ color: '' }}>КОНТАКТЫ</Typography>
                                <Typography variant="body1" style={{ marginTop: 20 }}>Наши контакты</Typography>
                                <Typography variant="body1" style={{ marginTop: 20 }}>Наши реквизиты</Typography>
                                <Typography variant="body1" style={{ marginTop: 20 }}>Статьи и новости</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default Footer