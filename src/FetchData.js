import React, { useEffect, useState } from 'react'
import axios from 'axios'

function FetchData() {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect (() => {
        fetchJokes();
    },[])

        const fetchJokes = (() => {
            axios.get('https://api.chucknorris.io/jokes/random')
            .then(res => {
                setData([res.data])
                setLoading(false);
            })
            .catch(err => console.log(err)) 
        })


        const displayJokes = data.map((random) =>{
            return (
                <div key={random.id}>
                    <h2>{random.value}</h2>
                </div>
            );
        });
    
    
  return (
    <div className = 'container'>
        {loading? (
            <p>Loading...</p>
        ) : (
            <div>
                {displayJokes}
                <button onClick={fetchJokes}>Get Another Joke</button>
            </div>
        )} 
    </div>
  )
}
export default FetchData