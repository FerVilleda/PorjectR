import React from 'react'
import Catalogo from './Catalogo'
import Sidebar from './Sidebar'
import {Grid} from '@material-ui/core'

const View = () => {

    return (
        <div>
            <Grid container direction='row'>
                <Grid item xs='2'>
                    <Sidebar></Sidebar>
                </Grid>
                <Grid item xs='10'>
                    <Catalogo></Catalogo>
                </Grid>
            </Grid>            
        </div>
    )
}

export default View
