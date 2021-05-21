import { Entry } from "../models/Entry";
import { postGraphql } from '../core/GeneralService';

interface QueryResult {
    data: QueryPayload;
    errors: QueryError;
}

interface QueryPayload {
    entries: Entry[]
}

interface QueryError {
    message: string;
}

export const getEntries = (): Promise<QueryResult> => {
    const query = `{ 
        entries { 
            id
            date
            expectedValue
            actualValue
            memo
            account {
                id
                name
            }
        }
    }`;
    return postGraphql<QueryResult>(query);
}

export const updateEntry = (data: Entry) => {
    const mutation = `mutation { 
        updateEntry(id: "${data.id}", date: ${data.date}, expected_value: ${data.expectedValue}, actual_value: ${data.actualValue}, memo: "${data.memo}", account_id: ${data.account?.id}) { 
            entry { 
                id
                date
                expectedValue
                actualValue
                memo
                account {
                    id
                    name
                }
            }
        }
    }`;
    return postGraphql<any>(mutation);
};

export const deleteEntry = (data: Entry) => {
    const mutation = `mutation { 
        deleteEntry(id: "${data.id}") { 
            ok
        }
    }`;
    return postGraphql<any>(mutation);
};
