import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';


export const Register = ({ formData, navigation }) => {
    const { go } = navigation;
    const {
        foreName,
        lastName,
        phone,
        email,
    } = formData;

    return ( <
        Container maxWidth = 'sm' >
        <
        h3 > Formulário < /h3> <
        RenderAccordion summary = "UserList"
        go = { go }
        details = {
            [
                { 'Primeiro nome': foreName },
                { 'Sobrenome': lastName },
                { 'Telefone': phone },
                { 'email': email },

            ]
        }
        /> <
        RenderAccordion summary = "CustomerRegistration"
        go = { go }
        details = {
            []
        }
        /> < /
        Container >
    );
};

export const RenderAccordion = ({ summary, details, go }) => ( <
    Accordion >
    <
    AccordionSummary expandIcon = { < ExpandMoreIcon / > } > { summary } < /AccordionSummary> <
    AccordionDetail >
    <
    div > {
        details.map((data, index) => {
            const objKey = Object.keys(data)[0];
            const objValue = data[Object.keys(data)[0]];

            return <ListItemText key = { index } > { `${objKey}: ${objValue}` } < /ListItemText>

        })
    } <
    IconButton color = "primary"
    component = "span"
    onClick = {
        () => go(`${summary.toLowerCase()}`)
    } >
    <
    EditIcon / > < /IconButton>


    <
    /div> < /
    AccordionDetail > <
    /Accordion>
)