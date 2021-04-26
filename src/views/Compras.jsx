import React from 'react'
import {Container, Grid, makeStyles, Typography, Button, Divider} from '@material-ui/core'
import FormCompra from '../components/FormCompra';
import FormProveedor from '../components/FormProveedor';

const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(8,1,1,-4),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    grids: {
        padding: theme.spacing(3),
    },
    btns:{
        margin: theme.spacing(3)
    }
  }));


const Compras = () => {
    const [escompra,setEscompra] = React.useState(false)
    const classes = useStyles()

    return (
        <>
            <Container component='main' maxWidth='xl' className={classes.paper}>
                <Grid container xs={4} direction='column' justify='flex-start' alignItems='flex-start'>
                    <Grid direction='row'>
                        <Button variant='outlined'
                                margin='normal'                          
                                id='provA'
                                name='provA'
                                color='secondary'
                                className={classes.btns}
                                onClick={()=>setEscompra(false)}>
                            Registrar Proveedor
                        </Button>
                        <Button variant='outlined'
                                margin='normal'                          
                                id='provA'
                                name='provA'
                                color='secondary'
                                className={classes.submit}
                                onClick={()=> setEscompra(true)}>
                            Registrar Compra
                        </Button>
                    </Grid>
                    
                    <Divider></Divider>
                    <br></br>
                    {
                        escompra ? <FormCompra></FormCompra> : <FormProveedor></FormProveedor>
                    }
                    
                </Grid>

                <Grid item xs={8} className={classes.grids}>
                    Tabla de compras
                </Grid>
                
            </Container>
        </>
    )
}

export default Compras
