import { ApiService } from "../../services/ToBeTested/ApiService-New";
import { useCallback, useState} from "react";


const useApiDelete = <T>(api:string) => {
    const [response, setResponse] = useState<T>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const deleteApiResponse = useCallback(async() =>{
        setLoading(true);
        const apiService = new ApiService<T>(`/${api}`,true);

        try{
            const data = await apiService.get();
            setLoading(false);
            setResponse(data);
        }catch(e:any){
            setError(e?.message);
        }
    }, [api])

    return{ response, loading, error, deleteData:deleteApiResponse }
}

export default useApiDelete;