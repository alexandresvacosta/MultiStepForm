import React from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export const ListUser = ({ formData, setForm, navigation }) => {
    console.log(navigation);
    const { name, lastName, phone, email, password } = formData;
    return ( <
        container maxWidth = "xs" >
        <
        h3 > Usuário < /h3>


        <
        TextField label = "Nome"
        name = "name"
        value = { name }
        onChange = { setForm }
        margin = "normal"
        variant = "outlined"
        autoComplete = "off"
        fullWidth /
        >

        <
        TextField label = "Sobre Nome"
        name = "lastName"
        value = { lastName }
        onChange = { setForm }
        margin = "normal"
        variant = "outlined"
        autoComplete = "off"
        fullWidth /
        >

        <
        TextField label = " Telefone "
        name = "phone"
        value = { phone }
        onChange = { setForm }
        margin = "normal"
        variant = "outlined"
        autoComplete = "off"
        fullWidth /
        >

        <
        TextField label = "email"
        name = "email"
        value = { email }
        onChange = { setForm }
        margin = "normal"
        variant = "outlined"
        autoComplete = "off"
        fullWidth /
        >

        <
        TextField label = "Senha"
        name = "password"
        value = { password }
        onChange = { setForm }
        margin = "normal"
        variant = "outlined"
        autoComplete = "off"
        fullWidth /
        >

        <
        div style = {
            { marginTop: "1rem" }
        } >
        <
        Button color = "secondary"
        variant = "contained"
        style = {
            { marginRight: "1rem" }
        }
        onClick = {
            () => navigation.previous()
        } >
        Voltar <
        /Button>

        <
        Button color = "primary"
        variant = "contained"
        onClick = {
            () => navigation.next()
        } >
        Próximo <
        /Button>


        <
        /div>  

        <
        /container>
    );
};