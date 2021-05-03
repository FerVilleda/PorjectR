import React from 'react'
import {makeStyles} from '@material-ui/core'
import {DataGrid} from '@material-ui/data-grid'
import ventasSample from '../datasamples/ventasSample.json'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'uid_cliente', headerName: 'Cliente', width: 120 },
    { field: 'uid_prod', headerName: 'Producto',width: 120,},
    { field: 'cantidad', headerName: 'Cantidad', type: 'number', width:120},
    { field: 'precio', headerName: 'Precio Venta', type: 'number',width: 150},
    { field: 'total', headerName: 'Total Venta', type: 'number', width: 150}
  ];

const ventas = ventasSample

const useStyles = makeStyles((theme) => ({
    grids: {
        padding: theme.spacing(1),
    }
  }));

const TablaVentas = () => {
    return (
        <>
            <div style={{ height: 500, width: '100%' }}>
                <DataGrid rows={ventas} columns={columns} pageSize={7} checkboxSelection />
            </div>
        </>
    )
}

export default TablaVentas
