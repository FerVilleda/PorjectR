import React from 'react'
import {makeStyles, Grid, Typography} from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid';
import almacenSample from '../datasamples/almacenSample.json'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'nombre', headerName: 'Nombre', width: 150 },
    { field: 'empaque', headerName: 'Empaque', type: 'number',width: 130,},
    { field: 'cantidad', headerName: 'Cantidad en Existencia', type: 'number', width:200},
    { field: 'precioCompra', headerName: 'Precio Compra', type: 'number',width: 150},
    { field: 'previoVenta', headerName: 'Precio Venta', type: 'number', width: 150},
    { field: 'cantidadPesos', headerName: 'Cantidad MXN', type: 'number', width: 150}
  ];
const almacen = almacenSample;

const useStyles = makeStyles((theme) => ({
    grids: {
        padding: theme.spacing(3),
    }
  }));

const TablaAlmacen = () => {
    const classes = useStyles()
    return (
        <>
            <Grid item xs={12} className={classes.grids} >
                    <Typography component='h3' variant='h5' >
                        Almacen
                    </Typography>
                    <br></br>
                    <div style={{ height: 500, width: '100%' }}>
                        <DataGrid rows={almacen} columns={columns} pageSize={7} checkboxSelection />
                    </div>
                    <br></br>
                    <Typography component='h4' variant='h6' color='secondary' align='center'>
                        Valor total del inventario en MXN: $ 5660
                    </Typography>
            </Grid>
        </>
    )
}

export default TablaAlmacen
