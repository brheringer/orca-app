//context is used to share data between components
//it is a singleton
//maybe it can be thought as a service injection

import React, { createContext, useState, useEffect } from 'react';
import { AccountContextType } from './AccountContextType';
import { Account } from '../models/Account';
import { getAccounts, saveAccounts } from '../services/AccountService';

export const AccountContext = createContext<AccountContextType>({
    accounts: [],
    addAccount: () => { },
    removeAccount: () => { }
});

const AccountProvider = (props: any) => {
    const [accounts, setAccounts] = useState<Account[]>(getAccounts);

    useEffect(() => {
        saveAccounts(accounts);
    }, [accounts]);

    const addAccount = (structure: string, name: string, kind: number) => {
        const account: Account = { id: accounts.length + 1, structure: structure, name: name, kind: kind };
        setAccounts([...accounts, account]);
    }

    const removeAccount = (account: Account) => {
        const index = accounts.indexOf(account);
        setAccounts(accounts.filter((_, i) => i !== index));
    }

    return (
        <AccountContext.Provider value={{ accounts, addAccount, removeAccount }}>
            {props.children}
        </AccountContext.Provider>
    );
}

export default AccountProvider;