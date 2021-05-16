const ORCA_APP_STORE_TOKEN = 'orca_app_storage_token';

export const getToken = (): string => {
    const data = localStorage.getItem(ORCA_APP_STORE_TOKEN) || '';
    return data;
}

export const setToken = (token: string) => {
    localStorage.setItem(ORCA_APP_STORE_TOKEN, token)
}