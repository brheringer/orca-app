import { Account } from "./Account";

export class Entry {
    constructor(
        public id: number,
        public date: Date,
        public account: Account,
        public expectedValue: number,
        public actualValue: number,
        public memo: string,
        public clippedMemo: string) {}
}