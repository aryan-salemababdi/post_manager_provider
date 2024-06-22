import { useCallback, useEffect, useState } from "react";
import { Axios, AxiosResponse } from "../config/http";




export default function useQuery<T>(url: string, lazy: boolean = false) {

    //data
    //error
    //pending
    const [data, setDeta] = useState<T>();
    const [error, setError] = useState<string>();
    const [loading, setLoading] = useState(false);

    const handleSuccess = async () => {
        const res: AxiosResponse<T> = await Axios.get(url);
        setDeta(res.data)
    };

    const handleError = (err: unknown) => {
        if (err instanceof Error) setError(err.message)
    };


    const runQuery = useCallback(() => {
        setLoading(true);
        try {
            handleSuccess()
        } catch (e) {
            handleError(e)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    useEffect(() => {
        if (!lazy) runQuery()
    }, [runQuery]);

    return { data, error, loading, refetch: runQuery }
}