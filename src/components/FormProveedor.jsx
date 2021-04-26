import React from 'react'
import {makeStyles, TextField, Button, Divider, Grid, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
      submit: {
        margin: theme.spacing(3, 1, 2),
      }
}))

const FormProveedor = () => {

    const classes = useStyles()
    return (
        <>
            <form className={classes.form}>
                <Grid container spacing={2}>
                    <Typography variant="subtitle2" >
                        Datos del Proveedor
                    </Typography>
                    <Divider></Divider>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="nombreP"
                            name="nombreProv"
                            label="Nombre"
                            fullWidth
                            size='small'
                            variant='outlined'
                            color='secondary'                   
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address2"
                            name="address2"
                            label="Direccion"
                            fullWidth
                            size='small'
                            variant='outlined'  
                            color='secondary' 
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="RFC"
                            fullWidth
                            size='small'
                            variant='outlined'  
                            color='secondary' 
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Razon Social"
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
                        Registrar Proveedor
                    </Button>              
                </Grid>
            </form>
        </>
    )
}

export default FormProveedor
