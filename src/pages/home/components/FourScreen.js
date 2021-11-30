import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { Box, Container, TextField, Typography, Button } from '@material-ui/core'

const styles = (theme) => ({
    wrapperContainer: {
        backgroundImage: `url(${"/img/Rectangle59.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: 1000,
        paddingTop: 100,
        color: 'white',
        backgroundAttachment: 'fixed'
    },
    formStyle: {
        border: '1px solid #FFFFFF',
        width: '80%',
        margin: '0 auto',
        borderRadius: 8,
        padding: '100px 20px 100px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleBox: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    },
    input: {
        width: '100%',
        marginTop: 20,
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            color: "white"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "white"
        },
        "& .MuiInputLabel-outlined": {
            color: "white"
        },
    },
    form: {
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        },
    }
})

const FourScreen = (props) => {
    const { classes } = props
    return (
        <Box className={classes.wrapperContainer}>
            <Container>
                <Box className={classes.formStyle}>
                    <Box className={classes.titleBox}>
                        <Typography variant="h5">ОБРАТНАЯ СВЯЗЬ</Typography>
                        <Typography variant="h6" style={{ marginTop: 20 }}>Поделитесь мнением о нашей работе или задайте нам любой интересующий вас вопрос в поле комментарий</Typography>
                    </Box>
                    <form noValidate className={classes.form}>
                        <TextField label="Имя" fullWidth className={classes.input} variant="outlined" />
                        <TextField label="Фамилия" fullWidth className={classes.input} variant="outlined" />
                        <TextField label="Телефон" fullWidth className={classes.input} variant="outlined" />
                        <TextField label="E-mail" fullWidth className={classes.input} variant="outlined" />
                        <TextField label="Комментарий" fullWidth className={classes.input} variant="outlined" />
                        <Button variant="contained" style={{ backgroundColor: '#424242', color: 'white', height: 60, marginTop: 20 }} fullWidth>Отправить</Button>
                    </form>
                </Box>
            </Container>
        </Box>
    )
}

export default withStyles(styles)(FourScreen)