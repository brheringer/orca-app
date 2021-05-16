import { getToken } from './LocalStorageBroker'

const ENDPOINTRURL = 'http://localhost:3000/graphql'; //TODO parameterize

export async function postGraphql<T>(query: string): Promise<T> {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + getToken() },
        body: JSON.stringify({ query: query })
    }
    const response = await fetch(ENDPOINTRURL, requestOptions);
    const body = await response.json();
    //TODO catch
    return body;
}