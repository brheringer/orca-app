import { Account } from "../models/Account";

const ACCOUNT_STORE = 'orca_accounts';

export const getAccounts = (): Account[] => {
    const data = localStorage.getItem(ACCOUNT_STORE) || '';
    try {
        const result = JSON.parse(data) as Account[];
        return result;
    } catch {
        return [];
    }
}

export const saveAccounts = (data: Account[]) => {
    if(data?.length > 0)
        localStorage.setItem(ACCOUNT_STORE, JSON.stringify(data))
}