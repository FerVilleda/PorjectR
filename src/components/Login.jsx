import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Grid, 
        Box, 
        Container, 
        TextField,
        Avatar, 
        Typography,
        Button} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  

const Login = () => {

    const classes = useStyles();

    return (
        <>
            <Container component='main' maxWidth='xs'>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Bienvenido
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Correo'
                            name='email'
                            autoFocus
                            autoComplete='email'
                            color='secondary'>
                        </TextField>
                        <TextField
                            variant='outlined'
                            type='password'
                            margin='normal'
                            required
                            fullWidth
                            id='contraseña'
                            label='Contraseña'
                            name='password'
                            autoComplete='current-password'
                            color='secondary'>
                        </TextField>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='secondary'
                            className={classes.submit} >
                            Entrar
                        </Button>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default Login
