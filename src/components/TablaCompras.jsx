import React from 'react'
import {makeStyles, Grid} from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid';
import comprasSample from '../datasamples/comprasSample.json'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'uid_prov', headerName: 'Proveedor', width: 120 },
    { field: 'uid_prod', headerName: 'Producto',width: 120,},
    { field: 'cantidad', headerName: 'Cantidad', type: 'number', width:120},
    { field: 'precio', headerName: 'Precio Compra', type: 'number',width: 150},
    { field: 'total', headerName: 'Total Compra', type: 'number', width: 150}
  ];
const compras = comprasSample;
const useStyles = makeStyles((theme) => ({
    grids: {
        padding: theme.spacing(3),
    }
  }));

const TablaCompras = () => {
    const classes = useStyles()
    return (
        <>
            
                    <div style={{ height: 600, width: '100%' }}>
                        <DataGrid rows={compras} columns={columns} pageSize={7} checkboxSelection />
                    </div>
            
        </>
    )
}

export default TablaCompras
