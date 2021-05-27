import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
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

export default function Biblioteca(){
    return(
        <Router>
            <div>
                <h2>Biblioteca Virtual</h2>
                <ul>
                    <li>
                        <Link to="/Dashboard/Subir-documento">Subir documento</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/Dashboard/Subir-documento">
                        <Upload />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Upload(){
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const [checked, setChecked] = React.useState(true);

    const handleCheck = (event) => {
      setChecked(event.target.checked);
    };

    return(
        <div>
            <Divider />
            <h3>Ingrese los siguientes datos para calificar su subida</h3>
            <form className={classes.root} noValidate autoComplete="off">
                <p>Facultad:</p>
                <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Facultad</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Facultad"
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Facultad1</MenuItem>
                <MenuItem value={20}>Facultad2</MenuItem>
                <MenuItem value={30}>Falcutad3</MenuItem>
                </Select>
                </FormControl>
                <p>Asignatura</p>
                <TextField id="outlined-basic" label="Asignatura" variant="outlined" />
                <p>Temas</p>
                <TextField id="outlined-basic" label="Temas" variant="outlined" />
                <p>Descripción</p>
                <TextField id="outlined-basic" label="Descripción" variant="outlined" />
                <p></p>
                <Button variant="contained" color="primary">Subir archivos</Button>
                <p>¿Desea mostrar su nombre de usuario como autor?</p>
                si<Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                no<Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </form>
        </div>
    );
}