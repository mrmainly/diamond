import React, { useState } from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Slider from 'react-slick'

import { CardCarusel } from '../index'

const useStyles = makeStyles(() => ({
    liner: {
        backgroundColor: 'white',
        height: 2,
        width: 70
    }
}))

const CaruselService = ({ data, title }) => {
    const classes = useStyles()
    const [slidesToShow, setSlidesToShow] = useState()
    const settings = {
        dots: true,
        centerPadding: "0px",
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow,
    };
    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 1190 && window.innerWidth >= 600) {
                setSlidesToShow(2)
            }
            else if (window.innerWidth < 600) {
                setSlidesToShow(1)
            } else {
                setSlidesToShow(3)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
    })

    return (
        <Box style={{ overflow: 'hidden', paddingTop: 100 }}>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Box className={classes.liner}></Box>
                <Typography variant="h5" style={{ marginLeft: 10, marginRight: 10 }}>{title}</Typography>
                <Box className={classes.liner}></Box>
            </Box>
            <Slider {...settings} style={{ width: '100%' }}>
                {data ? data.map((item, index) => (
                    <Box>
                        <CardCarusel
                            {...item}
                            key={index}
                        />
                    </Box>
                )) : ''}
            </Slider>
        </Box>
    )
}

export default CaruselService