import React, { useState, useEffect } from 'react'

import { AppBar, Toolbar, Container, Box, Typography, IconButton, Drawer } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
    logo: {
        display: 'flex',
        alignItems: 'center'
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        borderLeft: '1px solid rgba(0, 0, 0, 0.05)',
        padding: 10,
        borderRight: '1px solid rgba(0, 0, 0, 0.05)'
    },
    box1: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        borderRight: '1px solid rgba(0, 0, 0, 0.05)',
        [theme.breakpoints.down('sm')]: {
            marginTop: 20,
            borderLeft: '1px solid rgba(0, 0, 0, 0.05)',
        },
    },
    box2: {
        display: 'flex',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: 590,
        },
    },
    drawerBox: {
        minWidth: 220,
        padding: 20
    },
    rightBox: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        },
    }
}))

const Header = () => {
    const classes = useStyles()
    const imgArray = [
        { link: '', src: '/img/facebook.png' },
        { link: '', src: '/img/twitter.png' },
        { link: '', src: '/img/youtube.png' },
        { link: '', src: '/img/instagram.png' }
    ]
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 960
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);
    const rightBlock = () => {
        return (
            <Box className={classes.rightBox}>
                <Box className={classes.box}>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <MailOutlineIcon />
                        <Typography variant="body1"> КОНТАКТЫ</Typography>
                    </Box>
                    <Typography variant="body2" style={{ mt: 1 }}>+7 (999) 999-99-99</Typography>
                    <Typography variant="body2" style={{ mt: 1 }}>electr.pochta@gmail.com</Typography>
                </Box>
                <Box className={classes.box1}>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <MailOutlineIcon />
                        <Typography variant="body1">ЧАСЫ РАБОТЫ</Typography>
                    </Box>
                    <Typography variant="body2" style={{ mt: 1 }}>ПН-ПТ: 09:00 - 20:00</Typography>
                </Box>
                <Box className={classes.box2}>
                    {imgArray.map((item, index) => (
                        <img key={index} src={item.src} style={{ height: 30, marginLeft: 10, cursor: 'pointer' }} />
                    ))}
                </Box>
            </Box>
        )
    }
    const displayDesktop = () => {
        return (
            <Toolbar>
                <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box className={classes.logo}>
                        <img src="/img/Vector1.png" />
                        <Typography variant="h6" style={{ marginLeft: 12, fontFamily: 'Aclonica' }}>DIAMOND<br /> TRAVEL CLUB</Typography>
                    </Box>
                    {rightBlock()}
                </Container>
            </Toolbar>
        )
    }
    const getDrawerChoices = () => {
        return (
            <Box className={classes.drawerBox}>
                {rightBlock()}
            </Box>
        )
    };
    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));
        return (
            <Toolbar>
                <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box className={classes.logo}>
                        <img src="/img/Vector1.png" />
                        <Typography style={{ marginLeft: 12, fontFamily: 'Aclonica', fontFamily: 16 }}>DIAMOND<br /> TRAVEL CLUB</Typography>
                    </Box>
                    <IconButton
                        {...{
                            edge: "start",
                            "aria-label": "menu",
                            "aria-haspopup": "true",
                            onClick: handleDrawerOpen,
                        }}
                        style={{ color: 'black' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        {...{
                            anchor: "left",
                            open: drawerOpen,
                            onClose: handleDrawerClose,
                        }}
                    >
                        <div className={classes.drawerContainer} >{getDrawerChoices()}</div>
                    </Drawer>
                </Container>
            </Toolbar>
        )
    }
    return (
        <header>
            <AppBar position="static" style={{ background: 'white', color: 'black' }}>
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    )
}

export default Header