import React from 'react'
import {makeStyles, TextField, Button, Divider, Grid, Typography, MenuItem} from '@material-ui/core'
import prodSample from '../datasamples/prodSample.json'
import proveedorSample from '../datasamples/proveedorSample.json'

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 1, 2),
      }
}))

const FormCompra = () => {
    const classes = useStyles()
    const productos = prodSample
    const proveedores = proveedorSample
    return (
        <>
            <form className={classes.form}>
                <Grid container spacing={2}>
                    <Typography variant="subtitle2">
                        Datos de la compra
                    </Typography>
                    <Divider></Divider>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="Prod"
                            name="Producto"
                            label="Producto"
                            fullWidth
                            size='small'
                            variant='outlined'
                            color='secondary'
                            select                 
                        >
                            {
                                productos.map(producto=>(
                                    <MenuItem spacing={2} key={producto.id} value={producto.nombre}>
                                        {producto.nombre} - {producto.empaque}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="Prov"
                            name="proveedor"
                            label="Proveedor"
                            fullWidth
                            size='small'
                            variant='outlined'
                            color='secondary'
                            select                 
                        >
                            {
                                proveedorSample.map( prov => (
                                    <MenuItem key={prov.id} value={prov.nombre}>
                                        {prov.nombre} - {prov.rfc}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="cantidad"
                            name="cantidad"
                            label="Cantidad"
                            fullWidth
                            size='small'
                            variant='outlined'  
                            color='secondary' 
                        >
                            
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="precio"
                            name="precio"
                            label="Precio"
                            fullWidth
                            size='small'
                            variant='outlined'  
                            color='secondary' 
                        />
                    </Grid>
                    <Button 
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='secondary'
                        className={classes.submit}>
                        Registrar Compra
                    </Button>
                </Grid>
            </form>
            
            
        </>
    )
}

export default FormCompra
