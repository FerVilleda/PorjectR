import React from 'react'
import {makeStyles, Grid, Typography, TextField, Button, Divider, MenuItem} from '@material-ui/core'

const useStyles = makeStyles( theme => ({
    form:{
        width: '100%',
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3,1,2)
    }
}))

const FormCliente = () => {
    const clas = useStyles()
    return (
        <>
            <form className={clas.form}>
                <Grid container spacing={2}>
                    <Typography variant='subtitle2'>
                        Datos del Cliente
                    </Typography>
                    <Divider></Divider>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            variant='outlined'
                            size='small'
                            color='secondary'
                            label='Nombre'
                            >
                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            variant='outlined'
                            size='small'
                            label='Razon Social'
                            color='secondary'
                            >  
                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            variant='outlined'
                            size='small'
                            label='RFC'
                            color='secondary'>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            variant='outlined'
                            size='small'
                            label='Direccion'
                            color='secondary'>
                        </TextField>
                    </Grid>
                    <Grid item xs={7}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            size='small'
                            label='E-mail'
                            color='secondary'
                            type='email'>
                        </TextField>
                    </Grid>
                    <Grid item xs={5}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            size='small'
                            label='Telefono'
                            color='secondary'>
                        </TextField>
                    </Grid>
                    <Button
                         type='submit'
                         fullWidth
                         variant='contained'
                         color='secondary'
                         className={clas.submit}>
                             Registrar Cliente
                    </Button>
                </Grid>
            </form>
        </>
    )
}

export default FormCliente
