import React from 'react'

import { Box, Container, Typography, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import services from '../../../Json/service'
import { CardService } from '../../../components'

const useStyles = makeStyles(() => ({
    wrapperContainer: {
        backgroundImage: `url(${"/img/Rectangle3.png"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: 1100,
        paddingTop: 100,
        color: 'white',
        backgroundAttachment: 'fixed'
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

const SecondScreen = () => {
    const classes = useStyles()
    return (
        <div className={classes.wrapperContainer}>
            <Container>
                <Box className={classes.titleBox}>
                    <Typography variant="h4">КОНСЬЕРЖ УСЛУГИ</Typography>
                    <Typography variant="h6" style={{ width: '90%', marginTop: 20 }}>Компания JetSet Travel Club возьмет на себя любые заботы по организации отдыха или деловой поездки на премиальном уровне. </Typography>
                </Box>
                <Grid className={classes.Cards} container>
                    {services.map((item, index) => (
                        <Grid item lg={4} xl={4} md={4} sm={6} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                            <CardService key={index} {...item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}

export default SecondScreen