import { ConstructionOutlined, Email } from '@mui/icons-material';
import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {

    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    // const { token } = useAuth();

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        console.log(user);
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                // 'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }

            })


        e.preventDefault();
    }
    return (
        <div>
            <h3>Hi Admins</h3>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    name='email'
                    label="Email"
                    type='email'
                    onBlur={handleOnBlur}
                    variant="standard"

                />
                <Button type='submit' variant="contained">Make Admin</Button>

            </form>
            {success && <Alert severity="success">Made admin successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;