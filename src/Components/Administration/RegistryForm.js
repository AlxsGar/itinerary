import React, { useState } from 'react'
import Button from '../Elements/Button/Button';

import classes from './RegistryForm.module.css'

import { firestore } from "../Firebase/Firebase"
import { addDoc, collection } from "@firebase/firestore"

function RegistryForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const ref = collection(firestore, "teachers")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleCheckbox = (e) => {
        if (checkbox) {
            setCheckbox(false);
        } else {
            setCheckbox(true);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            name: name,
            email: email,
            active: checkbox
        }

        try {
            addDoc(ref, data);
        } catch (e) {
            console.log(e);
        }

        setName("");
        setEmail("");
        setCheckbox(false)
    }

    return (
        <form className={classes.registryForm}>
            <div className={classes.control}>
                <label>Nombre:</label>
                <input onChange={handleNameChange} value={name} />
            </div>
            <div className={classes.control}>
                <label>Correo:</label>
                <input onChange={handleEmailChange} value={email} />
            </div>
            <div className={classes.control}>
                <label>Activo:</label>
                <input name='active' onChange={handleCheckbox} type='checkbox' checked={checkbox} />
            </div>

            <Button onClick={handleSubmit}>Registrar</Button>
        </form>
    )
}

export default RegistryForm