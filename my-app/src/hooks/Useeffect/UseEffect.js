import { useEffect, useState } from "react"
import axios from "axios"
import './UseEffect.css' 

const Useeffect = () => {
    const [Data, setData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                console.log(response.data);
                setData(response.data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            })
    }, [])

    return (
        <div className="useeffect-container">
            <h1>UseEffect</h1>
            {Data.length > 0 ? (
                <>
                    <p>{Data[0].name}</p>
                    <p>{Data[0].email}</p>
                </>
            ) : (
                <p className="loading">Loading...</p>
            )}
        </div>
    )
}

export default Useeffect