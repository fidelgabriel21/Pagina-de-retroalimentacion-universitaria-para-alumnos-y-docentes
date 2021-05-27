import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    }, 
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    }, 
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
      selectEmpty: {
        marginTop: theme.spacing(2),
    },  
}));

export default function Solicitud(){
    return(
        <Router>
            <div>
                <h2>Solicitudes</h2>
                <ul>
                    <li>
                        <Link to="/Dashboard/Solicitud-para-reunion-con-docente">Solicitud para reunion con un docente</Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Solicitud-asesor-de-tesis">Solicitud de un asesor de tesis</Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Solicitud-para-ser-tutor">Solicitud para ser tutor</Link>
                    </li>
                    <li>
                        <Link to="/Dashboard/Solicitud-de-tutor">Solicitud de tutor</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/Dashboard/Solicitud-para-reunion-con-docente">
                        <Reunion />
                    </Route>
                    <Route path="/Dashboard/Solicitud-asesor-de-tesis">
                        <Tesis />
                    </Route>
                    <Route path="/Dashboard/Solicitud-para-ser-tutor">
                        <Tutor />
                    </Route>
                    <Route path="/Dashboard/Solicitud-de-tutor">
                        <Tutoria />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Reunion(){
    const classes = useStyles();
    return(
        <div>
            <Divider />
            <h3>Solicitud para reunion con un docente</h3>
            <form className={classes.root} noValidate autoComplete="off">
                <p>Asignatura y docente</p>
                <TextField id="outlined-basic" label="Asignatura" variant="outlined" />
                <TextField id="outlined-basic" label="Docente" variant="outlined" />
                <p>Asunto de la reunión</p>
                <TextField id="outlined-basic" label="Asunto" variant="outlined" />
                <p>Fechas disponibles</p>
                <TextField id="date" label="Fecha" type="date" defaultValue="2017-05-24" className={classes.textField} InputLabelProps={{shrink: true,}}/>
                <Button variant="contained" color="primary">Escoger fecha</Button>
                <Divider />
                <p>ENLACE DE LA REUNIÓN:</p>
            </form> 
        </div>
    );
}

function Tesis(){
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
        <div>
            <Divider />
            <h3>Solicitud de un asesor de tesis</h3>
            <form className={classes.root} noValidate autoComplete="off">
                <p>Ingrese palabras claves para flitrar docentes</p>
                <TextField id="outlined-basic" label="" variant="outlined" />
                <p>Lista de profesores:</p>
                <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Profesor</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Profesor"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Profe1</MenuItem>
                <MenuItem value={20}>Profe2</MenuItem>
                <MenuItem value={30}>Profe3</MenuItem>
                </Select>
                </FormControl>
                <Divider/>
                <p>Información del asesor:</p>
                <Divider />
                <p>Fechas disponibles:</p>
                <Button variant="contained" color="primary">Enviar correo al asesor</Button>
            </form>
        </div>
    );
}

function Tutor(){
    const classes = useStyles();

    return (
        <div>
            <Divider />
            <h3>Solcitud para ser tutor</h3>
            <form className={classes.root} noValidate autoComplete="off">
                <p>Nombre</p>
                <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                <p>Curso de especialización</p>
                <TextField id="outlined-basic" label="Curso" variant="outlined" />
                <p>Metodo de Trabajo</p>
                <TextField id="outlined-basic" label="" variant="outlined" />
                <Divider />
                <h3>Información de contacto:</h3>
                <p>Teléfono</p>
                <TextField id="outlined-basic" label="Teléfono" variant="outlined" />
                <p>Correo</p>
                <TextField id="outlined-basic" label="Correo" variant="outlined" />
                <p>Sala</p>
                <TextField id="outlined-basic" label="Sala" variant="outlined" />
                <p></p>
                <Button variant="contained" color="primary">Unirse a grupo de tutores</Button>
            </form>
        </div>
    );
}

function Tutoria(){
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return(
        <div>
            <Divider />
            <h3>Solicitud de tutor</h3>
            <form className={classes.root} noValidate autoComplete="off">
                <p>Ingrese palabras claves para filtrar tutores</p>
                <TextField id="outlined-basic" label="" variant="outlined" />
                <p>Lista de tutores:</p>
                <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Tutor</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Tutor"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Tutor1</MenuItem>
                <MenuItem value={20}>Tutor2</MenuItem>
                <MenuItem value={30}>Tutor3</MenuItem>
                </Select>
                </FormControl>
                <Divider/>
                <p>Información del tutor:</p>
                <Divider />
                <p>Fechas disponibles:</p>
                <Button variant="contained" color="primary">Enviar correo al tutor</Button>
            </form>
        </div>
    );
}