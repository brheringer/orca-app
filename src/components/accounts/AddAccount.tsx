import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AccountContext } from '../../contexts/AccountContext';
import { AccountContextType } from '../../contexts/AccountContextType';

const schema = yup.object().shape({
    structure: yup.string().required('Structure is required'),
    name: yup.string().required('Name is required'),
    kind: yup.number().required('kind is required'),
});

const AddAccount = () => {
    const { updateAccount } = useContext<AccountContextType>(AccountContext);
    const { register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(schema)});

    const onSubmit = (data: any, e: any) => {
        console.log(data)
        updateAccount(data.id, data.structure, data.name, data.kind);
        //e.target.reset();
        //window.location.href = '/';
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h4>New Account</h4>
            <div className="uk-margin uk-width-1-1">
                {/* <input type="text" name="structure" id="structure" placeholder="structure" className="uk-input" ref={register}></input> */}
                <input type="text" id="structure" placeholder="structure" className="uk-input" {...register('structure', { required: true })}></input>
                <span><small><strong className="uk-text-danger">{errors.structure?.message}</strong></small></span>
            </div>
            <div className="uk-margin uk-width-1-1">
                <input type="text" id="name" placeholder="name" className="uk-input" {...register('name', { required: true })}></input>
                <span><small><strong className="uk-text-danger">{errors.name?.message}</strong></small></span>
            </div>
            <div className="uk-margin uk-width-1-1">
                <input type="text" id="kind" placeholder="kind" className="uk-input" {...register('kind', { required: true })}></input>
                <span><small><strong className="uk-text-danger">{errors.kind?.message}</strong></small></span>
            </div>
            <div className="uk-width-1-1">
                <button type="submit" className="uk-button uk-button-primary">Save</button>
            </div>
        </form>
    );
}

export default AddAccount;