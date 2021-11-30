import React from 'react'

import { Container, Typography, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    box: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        },
        marginTop: 40
    },
    box2: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column-reverse",
            alignItems: 'center'
        },
        marginTop: 40
    },
    text: {
        width: '90%',
        [theme.breakpoints.down('sm')]: {
            margin: '0 auto',
            paddingBottom: 100,
            width: '100%'
        },
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 50
        },
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    img: {
        width: '90%',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    },
    wrapperContainer: {
        background: 'rgba(0, 36, 46, 1)',
        minHeight: 600,
        color: 'white',
        paddingTop: 100,
        paddingBottom: 100,
        [theme.breakpoints.down('sm')]: {
            paddingTop: 20
        },
    }
}))

const FirstScreen = () => {
    const classes = useStyles()
    return (
        <Box className={classes.wrapperContainer}>
            <Container>
                <div className={classes.root}>
                    <Grid container className={classes.box}>
                        <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                            <Box className={classes.text}>
                                <Typography variant="h6">КОНСЬЕРЖ СЕРВИС</Typography>
                                <Typography variant="body1" style={{ marginTop: 12 }}>Представьте, что Вы приходите в свое любимое кафе. Знакомый официант встречает Вас искренней улыбкой, провожает до Вашего излюбленного столика и точно знает, что делать, когда Вы говорите ему:
                                    «Мне как всегда». <br />
                                    Или, наоборот, Вы хотите попробовать что-то новое и вместе с ним отправляетесь в гастрономическое путешествие, потому что он точно знает про блюда всё и понимает, что посоветовать именно Вам. Так же чувствуют себя клиенты, выбирающие Jetset Travel Club.
                                </Typography>
                                <Typography variant="body1" style={{ marginTop: 42 }}>ПРИГЛАШАЕМ ВАС СТАТЬ ОДНИМ ИЗ НИХ</Typography>
                                <Typography variant="body1" style={{ marginTop: 12 }}>Мы гордимся своей экспертизой в организации поездок премиум-
                                    уровня и доверием, которое завоевали у vip-путешественников.</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={6} xl={6} md={6} sm={10} xs={12}>
                            <img src={'/img/Rectangle3958.png'} className={classes.img} />
                        </Grid>
                    </Grid>
                    <Grid container className={classes.box2}>
                        <Grid item lg={6} xl={6} md={6} sm={10} xs={12}>
                            <img src={'/img/Rectangle958.png'} className={classes.img} />
                        </Grid>
                        <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                            <Box className={classes.text} >
                                <Typography variant="h6">ВАШ ПЕРСОНАЛЬНЫЙ МЕНЕДЖЕР</Typography>
                                <Typography variant="body1" style={{ marginTop: 12 }}>Консьерж сервис JetSet Travel Club предоставляет в Ваше распоряжение консультанта, который остается на связи в режиме 24/7. Сотрудники обладают серьезным опытом в сфере предоставления VIP-услуг. Они трудятся с полной самоотдачей для создания комфорта и роскоши Вашего отдыха.

                                </Typography>
                                <Typography variant="body1" style={{ marginTop: 42 }}>Услуги компании предоставляются круглосуточно, без перерывов на обед и «личные форс-мажорные обстоятельства». Менеджер отвечает на телефонные звонки, а после получения просьбы немедленно приступает к выполнению задачи, включая все ресурсы, делая возможное и невозможное.</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.box}>
                        <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                            <Box className={classes.text}>
                                <Typography variant="h6">КОНСЬЕРЖ СЕРВИС И<br /> КОНФИДЕНЦИАЛЬНОСТЬ</Typography>
                                <Typography variant="body1" style={{ marginTop: 12 }}>Наши клиенты — владельцы компаний, бизнесмены, влиятельные семьи, знаменитости, которые не стремятся афишировать подробности личной жизни. Это люди, которые высоко ценят конфиденциальность и абсолютный комфорт
                                </Typography>
                                <Typography variant="body1" style={{ marginTop: 42 }}> Команда JetSet Travel Club предоставляет консьерж-сервис премиум-класса, гарантирует защиту полученной информации и личных данных от посторонних лиц.</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={6} xl={6} md={6} sm={10} xs={12}>
                            <img src={'/img/Rectangle2.png'} className={classes.img} />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Box>
    )
}

export default FirstScreen