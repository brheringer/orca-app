import { Account } from "../models/Account";
import { postGraphql } from '../core/GeneralService';

interface QueryResult {
    data: QueryPayload;
    errors: QueryError;
}

interface QueryPayload {
    accounts: Account[]
}

interface QueryError {
    message: string;
}

export const getAccounts = (): Promise<QueryResult> => {
    const query = `{ 
        accounts { 
            id
            structure
            name
            kind
        }
    }`;
    return postGraphql<QueryResult>(query);
}

export const updateAccount = (data: Account) => {
    const mutation = `mutation { 
        updateAccount(id: "${data.id}", structure: "${data.structure}", name: "${data.name}", kind: ${data.kind}) { 
            account { 
                id
                structure
                name
                kind
            }
        }
    }`;
    return postGraphql<any>(mutation);
};

export const deleteAccount = (data: Account) => {
    const mutation = `mutation { 
        deleteAccount(id: "${data.id}") { 
            ok
        }
    }`;
    return postGraphql<any>(mutation);
};
