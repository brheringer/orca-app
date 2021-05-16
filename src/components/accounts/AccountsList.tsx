import React, { useContext } from 'react';
import { AccountContext } from '../../contexts/AccountContext';
import { AccountContextType } from '../../contexts/AccountContextType';
import AccounstListItem from './AccountsListItem';

const AccountsList = () => {
    const { accounts } = useContext<AccountContextType>(AccountContext);

    return (
        <div>
            <table className="uk-table">
                <caption>Accounts List</caption>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Structure</th>
                        <th>Name</th>
                        <th>Kind</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        accounts?.map(a => (
                            <AccounstListItem key={a.id} account={a}></AccounstListItem>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AccountsList;