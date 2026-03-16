import { ApiService } from "../../services/ToBeTested/ApiService-New";
import { useCallback, useState} from "react";


const useApiPost = <T>(api:string, input:T) => {
    const [response, setResponse] = useState<T>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const postApiInput = useCallback(async() =>{
        setLoading(true);
        const apiService = new ApiService<T>(`/${api}`,true);

        try{
            const data = await apiService.post(input);
            setLoading(false);
            setResponse(data);
        }catch(e:any){
            setError(e?.message);
        }
    }, [api, input])

    return{ response, loading, error, postData:postApiInput }
}

export default useApiPost;
