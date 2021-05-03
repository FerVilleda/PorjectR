import React from 'react'
import {Container, Grid, Typography, makeStyles, Button, Divider} from '@material-ui/core'
import FormVentas from '../components/FormVentas'
import FormCliente from '../components/FormCliente'
import TablaVentas from '../components/TablaVentas'

const useStyles = makeStyles((theme) => ({
    principal:{
        margin: theme.spacing(1,1,1,-4),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    grids: {
        margin: theme.spacing(3),
    },
    btns:{
        marginRight: theme.spacing(2)
    },
    top:{
        marginTop: theme.spacing(3)
    }
}))

const Ventas = () => {
    const [esVenta, setEsventa] = React.useState(false)
    const classes = useStyles()
    return (
        <>
            <Container component='main' maxWidth='xl' className={classes.principal}>
                <Grid container xs={4} direction='column' justify='center' alignItems='flex-start' className={classes.grids}>
                    <Typography component='h3' variant='h5'>
                        Ventas
                    </Typography>
                    <Grid container direction='row' justify='space-evenly' className={classes.top}>
                        <Button
                                variant='outlined'
                                color='secondary'
                                size='small'
                                className={classes.btns}
                                onClick={() => setEsventa(false)}
                            >
                                Agregar Cliente
                        </Button>
                        <Button
                                variant='outlined'
                                color='secondary'
                                size='small'
                                className={classes.btns}
                                onClick={() => setEsventa(true)}
                            >
                                Agregar Venta
                        </Button>
                    </Grid>
                    
                    <Divider></Divider>
                    <br></br>
                    {
                        esVenta ? <FormVentas></FormVentas> : <FormCliente></FormCliente>
                    }
                    
                </Grid>

                <Grid item xs={8} className={classes.top}>
                    <TablaVentas></TablaVentas>
                </Grid>
                
            </Container>
        </>
    )
}

export default Ventas
