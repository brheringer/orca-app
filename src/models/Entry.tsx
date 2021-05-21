import { Account } from "./Account";
import moment from 'moment';

export class Entry {
    constructor(
        public id: number = 0,
        public date: Date = moment().startOf('day').toDate(),
        public account: Account | null = null,
        public expectedValue: number = 0,
        public actualValue: number = 0,
        public memo: string = '',
        public clippedMemo: string = '') {}
}