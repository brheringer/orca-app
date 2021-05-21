import React, { useContext, useEffect } from 'react';
import { Entry } from '../../models/Entry';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { MonthlyPanelContextType } from '../../contexts/MontlhyPanelContextType';
import { MonthlyPanelContext } from '../../contexts/MonthlyPanelContext';

const schema = yup.object().shape({
    expectedValue: yup.number().required('expected value is required'),
    actualValue: yup.number().required('actual value is required'),
    day: yup.number().required('day is required'),
    memo: yup.string().required('memo is required'),
    account: yup.string().required('account is required'),
});

interface EntryLayoutProps {
    entry: Entry;
}

const EntryLayout = (props: EntryLayoutProps) => {
    const { accounts, updateEntry, deleteEntry } = useContext<MonthlyPanelContextType>(MonthlyPanelContext);
    const { register, formState: {errors} } = useForm({resolver: yupResolver(schema)});

    useEffect(() => {
        //await yup.object().isValid()
        yup.object().isValid(props.entry).then(x => {
            if(x)
                updateEntry(props.entry);
        });
    }, [props.entry.actualValue, props.entry.date, props.entry.expectedValue, props.entry.memo, props.entry.account]);

    return (
        <tr className="uk-animation-slide-bottom-medium">
            <td>
                <input type="number" id="expectedValue" className="uk-input" {...register('expectedValue', { required: true })}></input>
                <span><small><strong className="uk-text-danger">{errors.expectedValue?.message}</strong></small></span>
            </td>
            <td>
                <input type="number" id="actualValue" className="uk-input" {...register('actualValue', { required: true })}></input>
                <span><small><strong className="uk-text-danger">{errors.actualValue?.message}</strong></small></span>
            </td>
            <td>
                <input type="date" id="date" className="uk-input" {...register('date', { required: true })}></input>
                <span><small><strong className="uk-text-danger">{errors.date?.message}</strong></small></span>
            </td>
            <td>
                <input type="text" id="memo" className="uk-input" {...register('memo', { required: true })}></input>
                <span><small><strong className="uk-text-danger">{errors.memo?.message}</strong></small></span>
            </td>
            <td>
                <input type="text" id="account" className="uk-input" {...register('account', { required: true })}></input>
                <span><small><strong className="uk-text-danger">{errors.account?.message}</strong></small></span>
            </td>
            <td>TODO</td>
            { accounts?.map(a => {(<td>TODO</td>)}) }
            <td>TODO</td>
            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger"
                    uk-icon="trash"
                    title={JSON.stringify(props.entry)}
                    onClick={() => deleteEntry(props.entry)}></button>
            </td>
        </tr>
    );
}

export default EntryLayout;