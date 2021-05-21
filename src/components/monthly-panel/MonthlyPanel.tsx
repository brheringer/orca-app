import React, { useContext, useState } from 'react';
import { Entry } from '../../models/Entry';
import { MonthlyPanelContextType } from '../../contexts/MontlhyPanelContextType';
import { MonthlyPanelContext } from '../../contexts/MonthlyPanelContext';
import EntryLayout from './EntryLayout';

const MonthlyPanel = () => {
    const { entries, accounts, addEmptyEntry } = useContext<MonthlyPanelContextType>(MonthlyPanelContext);
    //TODO current month
    //TODO bank actual total + start date

    return (
        <div>
        <table className="uk-table">
            <thead>
                <tr>
                    <th>Expected</th>
                    <th>Actual</th>
                    <th>Day</th>
                    <th>Memo</th>
                    <th>Account</th>
                    <th>Bank Balance</th>
                    {
                        accounts.map(a => (<td>{a.name}</td>))
                    }
                    <th>Expected Balance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={5}></td>
                    <td>Expected -&gt;</td>
                    {
                        accounts.map(a => (<td>TODO</td>))
                    }
                </tr>
                <tr>
                    <td colSpan={5}></td>
                    <td>Actual -&gt;</td>
                    {
                        accounts.map(a => (<td>TODO</td>))
                    }
                </tr>
                {
                    entries?.map(e => (
                        <EntryLayout key={e.id} entry={e}></EntryLayout>
                    ))
                }
            </tbody>
            <tfoot>
                <tr><td><button onClick={addEmptyEntry}>+</button></td></tr>
            </tfoot>
        </table>
        </div>
    );
}

export default MonthlyPanel;