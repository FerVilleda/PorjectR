import React from 'react'
import {Container, Grid, makeStyles, Typography, Button, Divider} from '@material-ui/core'
import FormCompra from '../components/FormCompra';
import FormProveedor from '../components/FormProveedor';
import TablaCompras from '../components/TablaCompras'

const useStyles = makeStyles((theme) => ({
    paper: {
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
  }));


const Compras = () => {
    const [escompra,setEscompra] = React.useState(false)
    const classes = useStyles()

    return (
        <>
            <Container component='main' maxWidth='xl' className={classes.paper}>
                <Grid container xs={4} direction='column' justify='center' alignItems='flex-start' className={classes.grids}>
                    <Typography component='h3' variant='h5'>
                        Compras
                    </Typography>
                    <Grid container direction='row' className={classes.top} justify='center'>
                        <Button variant='outlined'
                                margin='normal'                          
                                id='provA'
                                name='provA'
                                color='secondary'
                                className={classes.btns}
                                onClick={()=>setEscompra(false)}
                                size='small'>
                            Agregar Proveedor
                        </Button>
                        <Button variant='outlined'
                                margin='normal'                          
                                id='provA'
                                name='provA'
                                color='secondary'
                                className={classes.btns}
                                onClick={()=> setEscompra(true)}
                                size='small'>
                            Agregar Compra
                        </Button>
                    </Grid>
                    
                    <Divider></Divider>
                    <br></br>
                    {
                        escompra ? <FormCompra></FormCompra> : <FormProveedor></FormProveedor>
                    }
                    
                </Grid>

                <Grid item xs={8} className={classes.top} >
                    <TablaCompras></TablaCompras>
                </Grid>
                
            </Container>
        </>
    )
}

export default Compras
