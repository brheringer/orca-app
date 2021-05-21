//context is used to share data between components
//it is a singleton
//maybe it can be thought as a service injection

import React, { createContext, useState, useEffect } from 'react';
import { AccountContextType } from './AccountContextType';
import { Account } from '../models/Account';
import * as service from '../services/AccountService';

export const AccountContext = createContext<AccountContextType>({
    accounts: [],
    updateAccount: () => { },
    deleteAccount: () => { }
});

const AccountProvider = (props: any) => {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        service.getAccounts().then(result => {
            if(result.errors)
                setError(result.errors.message);
            else
                setAccounts(result.data.accounts);
        })
    }, []); // empty dependency array means this effect will only run once (like componentDidMount in classes)
   
    const updateAccount = (id: number, structure: string, name: string, kind: number) => {
        const account: Account = { id: id, structure: structure, name: name, kind: kind };
        service.updateAccount(account).then(data => {
            //TODO if error
            if(id > 0) {
                setAccounts([...accounts]);
            }
            else {
                account.id = data.data.updateAccount.account.id;
                setAccounts([...accounts, account]);
            }
        });
    }

    const deleteAccount = (account: Account) => {
        const index = accounts.indexOf(account);
        if(account.id > 0)
            service.deleteAccount(account);
        setAccounts(accounts.filter((_, i) => i !== index));
            //TODO if error
    }

    return (
        <AccountContext.Provider value={{ accounts, updateAccount, deleteAccount }}>
            {props.children}
        </AccountContext.Provider>
    );
}

export default AccountProvider;