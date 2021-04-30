import React from 'react'
import {makeStyles, Grid, Typography, Divider, TextField, Button, MenuItem} from '@material-ui/core'

const useStyles = makeStyles( theme => ({
    form: {
        width: '100%',
        marginTop: theme.spacing(7)
    },
    submit: {
        margin: theme.spacing(3,1,2)
    }
}))

const FormVentas = () => {
    const clases = useStyles()
    return (
        <>
            <form className={clases.form}>
                <Grid container spacing={2}>
                    <Typography variant='subtitle2'>
                        Datos de la Venta
                    </Typography>
                    <Divider></Divider>
                    <Grid item xs={12}>
                        <TextField
                            required
                            label='Producto'
                            fullWidth
                            size='small'
                            variant='outlined'
                            color='secondary'
                            select>
                                <MenuItem> Producto 1</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label='Cliente'
                            size='small'
                            variant='outlined'
                            color='secondary'
                            select>
                                <MenuItem> Cliente 1</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            fullWidth
                            label='Cantidad'
                            size='small'
                            variant='outlined'
                            color='secondary'>
                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label='Precio'
                            size='small'
                            variant='outlined'
                            color='secondary'
                            disabled>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label='Total'
                            size='small'
                            variant='outlined'
                            color='secondary'
                            disabled>
                        </TextField>
                    </Grid>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='secondary'
                        className={clases.submit}>
                            Registrar Venta
                    </Button>
                </Grid>
            </form>
        </>
    )
}

export default FormVentas
