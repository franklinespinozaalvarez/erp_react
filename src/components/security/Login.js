import React, {Component, useState, useContext} from 'react';
import {withStyles, Button, Card, CardContent, Checkbox, Divider, FormControl, FormControlLabel, TextField, Typography} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import classNames from 'classnames';
import {ERPService} from '../../services/ErpService';

//import {Link} from 'react-router-dom';
//import {FuseAnimate} from "../../@fuse";

const styles = theme => ({
    root: {
        background: 'linear-gradient(to right, ' + theme.palette.primary.dark + ' 0%, ' + darken(theme.palette.primary.dark, 0.5) + ' 100%)',
        color     : theme.palette.primary.contrastText
    }
});

class Login extends Component {

    //const [usuario, setUsuario] = useState('');
    constructor(props){
        super(props);
        this.state = {
            usuario   : '',
            contrasena: '',
            remember: true
        };
        this.onChangeUsuario = this.onChangeUsuario.bind(this);
        this.onChangeContrasena = this.onChangeContrasena.bind(this);
        this.onChangeRemember = this.onChangeRemember.bind(this);
        this.requestToken = this.requestToken.bind(this);
    }

    onChangeUsuario(e){
        this.setState({
            usuario: e.target.value
        });
    }

    onChangeContrasena(e){
        this.setState({
            contrasena : e.target.value
        });
    }

    onChangeRemember(e){
        this.setState({
            remember : !this.state.remember
        })
    }

    /*handleChange = (e) => {

        let login = Object.assign({},this.state.login);
        login[e.target.name] = e.target.value;
        this.setState({
            login:login
        });

    };*/

    canBeSubmitted() {
        const {usuario, contrasena} = this.state;
        //console.log('estado',this.state);
        return (
            usuario.length > 0 && contrasena.length > 0
        );
    }

    requestToken(e){
        e.preventDefault();
        ERPService.tokenERP();
        console.log('estado',this.state);
    }

    render()
    {
        const {classes} = this.props; console.log('classes',this.props);
        const {usuario, contrasena, remember} = this.state;

        return (
            <div className={classNames(classes.root, "flex flex-col flex-auto flex-no-shrink p-24 md:flex-row md:p-0")}>

                <div className="flex flex-col flex-no-grow items-center text-white p-16 text-center md:p-128 md:items-start md:flex-no-shrink md:flex-1 md:text-left">


                        <img className="w-128 mb-32" src="../../../public/assets/images/logo.png" alt="logo"/>



                        <Typography variant="h3" color="inherit" className="font-light">
                            Bienvenidos ERP BoA
                        </Typography>


                </div>


                    <Card className="w-full max-w-400 mx-auto m-16 md:m-0" square>

                        <CardContent className="flex flex-col items-center justify-center p-32 md:p-48 md:pt-128 ">


                            <form onSubmit={this.requestToken} name="loginForm" className="flex flex-col justify-center w-full">

                                <TextField
                                    className="mb-16"
                                    label="Usuario"
                                    autoFocus
                                    type="text"
                                    name="usuario"
                                    value={this.state.usuario}
                                    onChange={this.onChangeUsuario}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />
                                <br/>
                                <TextField
                                    className="mb-16"
                                    label="Password"
                                    type="password"
                                    name="contrasena"
                                    value={this.state.contrasena}
                                    onChange={this.onChangeContrasena}
                                    variant="outlined"
                                    required
                                    fullWidth
                                />

                                <div className="flex items-center justify-between">

                                    <FormControl>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    name="remember"
                                                    checked={this.state.remember}
                                                    onChange={this.onChangeRemember}/>
                                            }
                                            label="Recuerdame"
                                        />
                                    </FormControl>

                                </div>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    className="w-full mx-auto mt-16"
                                    aria-label="LOG IN"
                                    disabled={!this.canBeSubmitted()}
                                >
                                    INICIAR SESIÓN
                                </Button>

                            </form>







                        </CardContent>
                    </Card>

            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Login);
