//context is used to share data between components

import { Account } from "../models/Account";

export interface AccountContextType {
    accounts: Account[];
    updateAccount(id: number, structure: string, name: string, kind: number): void;
    deleteAccount(account: Account): void;
}