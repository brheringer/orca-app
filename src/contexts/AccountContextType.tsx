//context is used to share data between components

import { Account } from "../models/Account";

export interface AccountContextType {
    accounts: Account[];
    addAccount(structure: string, name: string, kind: number): void;
    removeAccount(account: Account): void;
}