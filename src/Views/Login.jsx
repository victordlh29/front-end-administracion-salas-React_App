import {  Button, Checkbox, Container, FormControlLabel, Grid, Link, makeStyles, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { yellow } from '@mui/material/colors';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import miImagen from '../Imagens/Room__Computer_Etiqueta.png';
import miImagen2 from '../Imagens/98137.jpg';



/* Estilos */
const gridStyle = {
    backgroundImage: `url(${miImagen2})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
};

const buttonStyle = {
    backgroundColor: '#222',
    color: '#fff',
};
const paperStyle = {
    padding: 20, height: "68vh", width: 350, margin: "100px auto", backgroundColor: 'rgba(255, 255, 255, 0)',
    opacity: '100%',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 20)',
    borderRadius: '10px',
    padding: '5vh',
    overflow: 'auto'
    
}




const Login = () => {
    
    /* Email and password validations */
    const validationSchema = Yup.object({
        email: Yup.string().email('Correo electrónico no válido').required('El correo electrónico es requerido'),
        password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es requerida'),
      });
      /* Hook */
      const [loginError, setLoginError] = useState('');
      

      const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
          console.log(values);
          // Aquí iría la lógica para enviar los datos a un servidor o hacer otras operaciones.
        },
      });
      

 

    return (
        /* Armado del login en la web */
        <Grid container style={gridStyle}>
            <Paper elevation={2} style={paperStyle}>
                {/* Cuadricula de  logo  */}
                <Grid align={'center'}>
                    <img src={miImagen} width={'100%'} height={'100%'}/>
                    <h1>Iniciar sesión</h1>
                </Grid> 

                {/* Acción de envio de datos al Hook */}
                <form onSubmit={formik.handleSubmit}>
                
                {/* Area de textos*/}
                <TextField
                   id="email"
                   name="email"
                   label="Correo electrónico"
                   type="email"
                   fullWidth
                   value={formik.values.email}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
                   error={formik.touched.email && Boolean(formik.errors.email)}
                   helperText={formik.touched.email && formik.errors.email}
                    InputProps={{
                        style: {
                            borderColor: '#000',
                        },
                        classes: {
                            focused: 'focused-style',
                            hover: 'hover-style',
                        },
                    }}
                    required
                />
                <TextField
                    id="password"
                    name="password"
                    label="Contraseña"
                    type="password"
                    fullWidth
                    sx={{mt:1}}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    InputProps={{
                        style: {
                            borderColor: '#000',
                        },
                        classes: {
                            focused: 'focused-style',
                            hover: 'hover-style',
                        },
                    }}
                    required
                />
                {/* Contenedor del recuerdame */}
                <FormControlLabel sx={{ width: '100%' }}

                    control={
                        <Checkbox
                            sx={{
                                color: yellow[500], '&.Mui-checked': {
                                    color: yellow[500],
                                },
                            }
                            }
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    }
                    label='Recuerdame'
                />
                {/* Botton Sign In and Forgot password */}
                <Button endIcon={<AccountCircleIcon />} type='submit' variant='contained' fullWidth style={buttonStyle}>
                    Iniciar sesión
                </Button>

                <Button type='button' variant='outlined' style={buttonStyle} fullWidth sx={{ mt: 3 }}>
                    Olvidaste tu contraseña?
                </Button>
                </form>
                {/* Redirección para el Registro */}
                <Typography sx={{ mt: 2, textAlign:'center'}}> No tienes cuenta?
                    <Link href='#' sx={{ ml: 1, color:'black'}}>
                        Registrate
                    </Link>
                </Typography>
            </Paper>

        </Grid>


    )
}

export default Login