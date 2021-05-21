import { Entry } from '../models/Entry'
import { Account } from '../models/Account'

export interface MonthlyPanelContextType {
    entries: Entry[];
    accounts: Account[];
    error: String;
    addEmptyEntry(): void;
    updateEntry(entry: Entry): void;
    deleteEntry(entry: Entry): void;
}