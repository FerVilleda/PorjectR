import React from 'react'
import Catalogo from '../views/Catalogo'
import Sidebar from './Sidebar'
import {Grid} from '@material-ui/core'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Almacen from '../views/Almacen'
import Inicio from '../views/Inicio'
import Compras from '../views/Compras'
import Ventas from '../views/Ventas'

const View = () => {

    return (
        <Router>
            <div>
                <Grid container direction='row'>
                    <Grid item xs='2'>
                        <Sidebar></Sidebar>
                    </Grid>

                    <Grid item xs='10'>
                        <Switch>
                            <Route path='/catalogo'>
                                <Catalogo></Catalogo>
                            </Route>
                            <Route path='/almacen'>
                                <Almacen></Almacen>
                            </Route>
                            <Route path='/compras'>
                                <Compras></Compras>
                            </Route>
                            <Route path='/ventas'>
                                <Ventas></Ventas>
                            </Route>
                            <Route path='/'>
                                <Inicio></Inicio>
                            </Route>
                        </Switch>
                    </Grid>
                </Grid>            
            </div>
        </Router>
    )
}

export default View
