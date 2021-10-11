
export default async function fetchData(url,setData,setLoading,setError){
    const response = await  fetch(url)
   if(response.ok){
        const data = await response.json()
        setData(data)
        setLoading(false)
    }
    else{
        setError(true)
        setLoading(false)
    }
}