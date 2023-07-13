export const fetcher = <T>(endpoint: string) => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/${endpoint}`;
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }

            return res.json() as Promise<T>;
        });
}