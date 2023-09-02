import { useState } from "react";

export const useFetching = (callback) => {
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) =>{
        try{
            setIsPending(true);
            await callback(...args);
        }   
        catch (e){
            setError(e.message);
        }
        finally{
            setIsPending(false);
        }
    }

    return [fetching, isPending, error];
}