import React from 'react'
import {Container, TextField, Button, makeStyles, Grid, Typography} from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid';
import prodSample from '../datasamples/prodSample.json' 

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nombre', headerName: 'Nombre', width: 150 },
    { field: 'description', headerName: 'Descripción', width: 250 },
    { field: 'empaque', headerName: 'Empaque', type: 'number',width: 130,},
    {field: 'piezas', headerName: 'Piezas', type: 'number',width: 100},
  ];
const productos = prodSample
const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(8,1,1,-4),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    grids: {
        padding: theme.spacing(3),
    }
  }));

const Catalogo = () => {

    const classes = useStyles();

    return (
        <>
            <Container component='main' maxWidth='xl' className={classes.paper}>

                <Grid item xs={8} className={classes.grids} >
                    <Typography component='h3' variant='h5'>
                        Catalogo
                    </Typography>
                    <br></br>
                    <div style={{ height: 550, width: '100%' }}>
                        <DataGrid rows={productos} columns={columns} pageSize={8} checkboxSelection />
                    </div>
                </Grid>

                <Grid item xs={4} alignContent='center'>
                    <Typography
                        component='h3' 
                        variant='h5'>
                            Agregar Producto
                    </Typography>
                    <form className={classes.form}>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            id='nombreP'
                            label='Nombre'
                            name='name'
                            color='secondary'>
                        </TextField>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            id='nombreP'
                            label='Descripcion'
                            name='name'
                            color='secondary'>
                        </TextField>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            fullWidth
                            id='nombreP'
                            label='Tipo de Empaque'
                            name='name'
                            color='secondary'>
                        </TextField>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='secondary'
                            className={classes.submit}>
                                Agregar
                        </Button>
                    </form>
                </Grid>
            </Container>  
        </>
    )
}

export default Catalogo
