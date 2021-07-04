import React from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export const CustomerRegistration = ({ formData, setForm, navigation }) => {
    console.log(navigation);
    const { cnpj, fantasyName, socialReason, codeZip, address, number, complement, district, city, phew } = formData;
    return ( < container maxWidth = "xs" >
        <
        h3 > Cliente < /h3>


        <
        TextField label = "CNPJ"
        name = "cnpj"
        value = { cnpj }
        onChange = { setForm }
        margin = ""
        variant = "outlined"
        autoComplete = "off"
        fullWidth /
        >

        <
        TextField label = "Nome Fantasia"
        name = "fantasyName"
        value = { fantasyName }
        onChange = { setForm }
        margin = "normal"
        variant = "outlined"
        autoComplete = "off"
        fullWidth /
        >

        <
        TextField label = " Razão Social "
        name = "socialReason"
        value = { socialReason }
        onChange = { setForm }
        margin = "normal"
        variant = "outlined"
        autoComplete = "off"
        fullWidth /
        >

        <
        TextField label = "CEP"
        name = "codeZip"
        type = "number"
        value = { codeZip }
        onChange = { setForm }
        margin = "normal"
        variant = "outlined"
        autoComplete = "off"
        fullWidth /
        >

        <
        TextField label = "Endereço"
        name = "address"
        value = { address }
        onChange = { setForm }
        margin = "normal"
        variant = "outlined"
        autoComplete = "off"
        fullWidth /
        >

        <
        TextField label = "Número"
        name = "number"
        type = "number"
        value = { number }
        onChange = { setForm }
        margin = "normal"
        variant = "outlined"
        autoComplete = "off"
        fullWidth /
        >

        <
        TextField label = "Complemento"
        name = "complement"
        type = "number"
        value = { complement }
        onChange = { setForm }
        margin = "normal"
        variant = "outlined"
        autoComplete = "off"
        fullWidth /
        >

        <
        TextField label = "Bairro"
        name = "district"
        value = { district }
        onChange = { setForm }
        margin = "normal"
        variant = "outlined"
        autoComplete = "off"
        fullWidth /
        >

        <
        TextField label = "Cidade"
        name = "city"
        value = { city }
        onChange = { setForm }
        margin = "normal"
        variant = "outlined"
        autoComplete = "off"
        fullWidth /
        >

        <
        TextField label = "UF"
        name = "phew"
        value = { phew }
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