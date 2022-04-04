import {useState ,useEffect} from 'react'


export const useFetch = (url) => {

    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)


    useEffect( () => {

        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(res=>setData(res))
            .catch(err =>setError(err))
            .finally(() => setLoading(false));
            
    },[url])


return {data,loading,error}
}

export default useFetch