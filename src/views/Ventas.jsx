import React from 'react'
import {Container, Grid, Typography, makeStyles, Button, Divider} from '@material-ui/core'
import FormVentas from '../components/FormVentas'
import FormCliente from '../components/FormCliente'
import TablaCompras from '../components/TablaCompras'

const useStyles = makeStyles((theme) => ({
    principal:{
      margin: theme.spacing(1,1,1,-4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    grids: {
        margin: theme.spacing(3),
    },
    btns:{
        marginRight: theme.spacing(0.5)
    }
}))

const Ventas = () => {
    const [esVenta, setEsventa] = React.useState(false)
    const clases = useStyles()
    return (
        <>
            <Container component='main' maxWidth='xl' className={clases.principal}>
                <Grid container xs={12} direction='row' justify='flex-start' className={clases.grids}>
                    <Typography component='h3' variant='h5'>
                        Ventas
                    </Typography>
                </Grid>
                <Grid container xs={12} direction='row'>
                    <Grid container xs={4} direction='column' justify='center' alignItems='center' >
                        <Grid direction='row' alignItems='flex-start' >
                            <Button
                                variant='outlined'
                                color='secondary'
                                size='small'
                                className={clases.btns}
                                onClick={() => setEsventa(false)}
                            >
                                Agregar Cliente
                            </Button>
                            <Button
                                variant='outlined'
                                color='secondary'
                                size='small'
                                onClick={() => setEsventa(true)}
                            >
                                Agregar Venta
                            </Button>
                        </Grid>
                        <Divider></Divider>
                        {
                            esVenta ? <FormVentas></FormVentas> : <FormCliente></FormCliente>
                        }
                        
                    </Grid>
                    <Grid container xs={8} direction='column'>
                        <TablaCompras></TablaCompras> 
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Ventas
