import React from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export const UserList = ({ formData, setForm, navigation }) => {
    console.log(navigation);
    const { foreName, lastName, phone, email, password } = formData;
    return ( <
        container maxWidth = "xs" >
        <
        h3 > Usuário < /h3>


        <
        TextField label = "Primeiro Nome"
        name = "foreName"
        value = { foreName }
        onChange = { setForm }
        margin = "normal"
        variant = "outlined"
        autoComplete = "off"
        fullWidth /
        >

        <
        TextField label = "Sobrenome"
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
        Button color = "primary"
        variant = "contained"
        onClick = {
            () => navigation.next()
        } >
        Concluir <
        /Button>


        <
        /div>  

        <
        /container>
    );
};