import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import * as localStorage from '../core/LocalStorageBroker';

const schema = yup.object().shape({
    username: yup.string().required('username is required'),
    password: yup.string().required('password is required'),
});

const Login = () => {
    const { register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(schema)});

    const onSubmit = (data: any, e: any) => {
        get(data.username, data.password).then(token => {
             localStorage.setToken(token)
        });
        e.target.reset();
        //window.location.href = '/';
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>Login</h4>
            <div className="uk-margin uk-width-1-1">
                <input type="text" id="username" placeholder="username" className="uk-input" {...register('username', { required: true })}></input>
            </div>
            <div className="uk-margin uk-width-1-1">
                <input type="password" id="password" placeholder="password" className="uk-input" {...register('password', { required: true })}></input>
            </div>
            <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>
            <input type="submit"></input>
        </form>
    );
}

async function get(username: string, password: string): Promise<string> {
    const requestOptions = {
        method: 'POST'
    }
    const response = await fetch('http://localhost:3000/login?username='+username+'&'+'password='+password, requestOptions); //TODO REFACTOR
    const body = await response.json();
    return body['token'];
}

export default Login;