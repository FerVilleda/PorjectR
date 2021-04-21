import React from 'react'
import {Divider, 
        Drawer,
        List,
        ListItem,
        ListItemIcon,
        ListItemText, 
        makeStyles} from '@material-ui/core'
import AllInboxIcon from '@material-ui/icons/AllInbox';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {NavLink} from 'react-router-dom'

const drawerWidth = 230;

const estilos = makeStyles(theme=>({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
}))

const Sidebar = () => {
    const classes = estilos()

    return (
        <>
            <Drawer className={classes.drawer}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    anchor='left'
                    variant='permanent'
                    open={true}      
            >
                <div className={classes.toolbar}></div>
                <Divider></Divider>
                <List component='nav'>
                    <ListItem button key='catalogo' component={NavLink} to='/catalogo' activeClassName="Mui-selected" exact>
                            <ListItemIcon>
                                <AllInboxIcon></AllInboxIcon>
                            </ListItemIcon>
                            <ListItemText primary='Catalogo'/>
                            
                    </ListItem>
                
                    <ListItem button key='almacen' component={NavLink} to='/almacen' activeClassName="Mui-selected" exact>
                            <ListItemIcon>
                                <HomeIcon></HomeIcon>
                            </ListItemIcon>
                            <ListItemText primary='Almacen'/>
                    </ListItem>

                    <ListItem button key='compras' component={NavLink} to='/compras' activeClassName='Mui-selected' exact>
                            <ListItemIcon>
                                <ShoppingCartIcon></ShoppingCartIcon>
                            </ListItemIcon>
                            <ListItemText primary='Compras'/>
                    </ListItem>

                    <ListItem button key='ventas' component={NavLink} to='/ventas' activeClassName='Mui-selected' exact>
                            <ListItemIcon>
                                <AttachMoneyIcon></AttachMoneyIcon>
                            </ListItemIcon>
                            <ListItemText primary='Ventas'/>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}

export default Sidebar
