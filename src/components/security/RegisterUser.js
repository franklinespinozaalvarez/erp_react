import React, {Component} from 'react';
import {Container, Grid, TextField, Avatar, Typography, Button} from "@material-ui/core";
import LockOutLineIcon from '@material-ui/icons/LockOutlined';



const style = {
    paper: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: 8,
        backgroundColor: "#e53935"
    },
    form: {
        width: '100%',
        marginTop: 10
    },
    submit: {
        marginTop: 15,
        marginBottom: 20
    }
};

class RegisterUser extends Component {


            state = {
                user:{
                    nombre: '',
                    apellido: '',
                    email: '',
                    password: ''
                }
            }



    onChange = (e) => {
        let user = Object.assign({},this.state.user);
        user[e.target.name] = e.target.value;
        this.setState({
            user:user
        });
    }

    registerUser = (e) =>{
            e.preventDefault();
            console.log('imprimir objeto usuario del state', this.state.user);
    }

    render() {
        return (
            <div>
                <Container maxWidth={"md"}>
                    <div style={style.paper}>
                        <Avatar style={style.avatar}>
                            <LockOutLineIcon />
                        </Avatar>
                        <Typography component={"h1"} variant={"h5"}>
                            Register Count
                        </Typography>
                        <form style={style.form}>
                            <Grid container spacing={2}>
                                <Grid item md={6} xs={12}>
                                    <TextField onChange={this.onChange} name={"nombre"} fullWidth label={"Ingrese su Nombre"} value={this.state.user.nombre}/>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField name={"apellido"} onChange={this.onChange} fullWidth label="Ingrese sus Apellidos" value={this.state.user.apellido}/>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField  name={"email"} onChange={this.onChange} fullWidth label={"Ingrese su e-mail"} value={this.state.user.email}/>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <TextField type={"password"} onChange={this.onChange} name={"password"} fullWidth label={"Ingrese su Password"} value={this.state.user.password}/>
                                </Grid>
                            </Grid>
                            <Grid container justify={"center"}>
                                <Grid item xs={12} md={6}>
                                    <Button onClick={this.registerUser} type={"submit"} variant={"contained"} fullWidth size={"large"} color={"primary"} style={style.submit}>
                                        Registrar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </div>
        );
    }
}

export default RegisterUser;
