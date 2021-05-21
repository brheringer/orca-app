import { createContext, useState, useEffect } from "react";
import { Entry } from "../models/Entry";
import { Account } from "../models/Account";
import { MonthlyPanelContextType } from "./MontlhyPanelContextType";
import * as entryService from '../services/EntryService';
import * as accountService from '../services/AccountService';

export const MonthlyPanelContext = createContext<MonthlyPanelContextType>({
    entries: [],
    accounts: [],
    error: '',
    addEmptyEntry: () => {},
    updateEntry: () => {},
    deleteEntry: () => {}
});

const MonthlyPanelProvider = (props: any) => {
    const [entries, setEntries] = useState<Entry[]>([]);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        //TODO recalculate stuff
    }, [entries]);

    useEffect(() => {
        //TODO filter by date
        entryService.getEntries().then(result => {
            if(result.errors)
                setError(result.errors.message);
            else
                setEntries(result.data.entries);
        });

        accountService.getAccounts().then(result => {
            if(result.errors)
                setError(result.errors.message);
            else
                setAccounts(result.data.accounts);
        });
    }, []); // empty dependency array means this effect will only run once (like componentDidMount in classes)

    const addEmptyEntry = () => {
        setEntries([...entries, new Entry()]);
    }

    const updateEntry = (entry: Entry) => {
        entryService.updateEntry(entry).then(result => {
            if(result.errors)
                setError(result.errors.message);
            else if(entry.id > 0)
                setEntries([...entries]);
            else {
                entry.id = result.data.updateEntry.entry.id;
                setEntries([...entries, entry]);
            }
        });
    }

    const deleteEntry = (entry: Entry) => {
        const index = entries.indexOf(entry);
        if(entry.id > 0)
            entryService.deleteEntry(entry).then(() => {
                setEntries(entries.filter((_, i) => i !== index));
            });
        else
            setEntries(entries.filter((_, i) => i !== index));
    }

    return (
        <MonthlyPanelContext.Provider value={{ entries, accounts, error, addEmptyEntry, updateEntry, deleteEntry }}>
            {props.children}
        </MonthlyPanelContext.Provider>
    )
}

export default MonthlyPanelProvider;