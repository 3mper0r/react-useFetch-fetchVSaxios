import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // AXIOS
    useEffect(() => {
        setLoading(true)
        axios
            .get(url)
            .then((resp) => setData(resp.data))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [])

    // FETCH
    // useEffect(() => {
    //     setLoading(true)
    //     fetch(url)
    //         .then((resp) => (resp.json()))
    //         .then(data => setData(data))
    //         .catch((err) => setError(err))
    //         .finally(() => setLoading(false))
    // }, [])

    return { data, loading, error }
}

export default useFetch