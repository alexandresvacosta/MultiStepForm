import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Register } from "./stepForm/Register";
import { CustomerRegistration } from "./stepForm/CustomerRegistration";
import { UserList } from "./stepForm/UserList";
import { Submit } from "./stepForm/Submit";

const defaultData = {
    name: "",
    foreName: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    cnpj: '',
    fantasyName: '',
    socialReason: '',
    codeZip: '',
    address: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    phew: '',
};

const steps = [
    { id: 'register' },
    { id: 'customerregistration' },
    { id: 'userlist' },
    { id: 'submit' },
]

export const MultiStepForm = () => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    const props = { formData, setForm, navigation }

    switch (step.id) {
        case "register":
            return <Register {...props }
            />;
        case "customerregistration":
            return <CustomerRegistration {...props }
            />;
        case "userlist":
            return <UserList {...props }
            />;
        case "submit":
            return <Submit {...props }
            />;
    }

    console.log(step);

    return ( <
        div >
        <
        h1 > Multi step form < /h1> < /
        div >
    );
};