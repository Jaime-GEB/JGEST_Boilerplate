import { ApiService } from "../../services/ToBeTested/ApiService-New";
import { useCallback, useState} from "react";


const useApiPut = <T>(api:string, input:T) => {
    const [response, setResponse] = useState<T>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const putApiInput = useCallback(async() =>{
        setLoading(true);
        const apiService = new ApiService<T>(`/${api}`,true);

        try{
            const data = await apiService.put(input);
            setLoading(false);
            setResponse(data);
        }catch(e:any){
            setError(e?.message);
        }
    }, [api, input])

    return{ response, loading, error, putData:putApiInput }
}

export default useApiPut;