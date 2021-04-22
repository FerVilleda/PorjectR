import React from 'react'
import {Container, makeStyles, Typography} from '@material-ui/core'
import TablaAlmacen from '../components/TablaAlmacen';

const useStyles = makeStyles((theme) => ({
    paper: {    
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }
}));


const Almacen = () => {
    const classes = useStyles()
    return (
        <>
            <Container component='main' maxWidth='xl' className={classes.paper}>
                <TablaAlmacen></TablaAlmacen>
            </Container>
        </>
    )
}

export default Almacen
