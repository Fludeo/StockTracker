import {useState ,useEffect} from 'react'


export const useFetch = (url) => {

    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)


    useEffect( () => {
        const fetchData = async(url)=>{

            try {
              setLoading(true)
              const response = await fetch(url)
              const jsonData = await response.json()
              setData(jsonData)
            } catch (err) {
              setError(err)
            }
            finally{
              setLoading(false)
            }
          }
      
          fetchData(url)
            
    },[url])


return {data,loading,error}
}

export default useFetch