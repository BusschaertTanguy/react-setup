export const fetcher = <T>(endpoint: string, method: "GET" | "POST") => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/${endpoint}`;
    return fetch(url, {method})
        .then(res => {
            if (!res.ok) {
                throw new Error(res.statusText);
            }

            return res.json() as Promise<T>;
        });
}