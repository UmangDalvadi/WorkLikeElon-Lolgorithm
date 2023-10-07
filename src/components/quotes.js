import React, { useEffect, useState } from 'react'
import './quotes.css'



const quotes = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState([]);
    const api_url = "https://api.quotable.io/random";

    const api_fetch = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data.content);
        setData(data);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        api_fetch(api_url);
    }, []);


    return (
        <>
            <div className="container">
                <h2>Quote of the day</h2>
                <blockquote >{data.content}</blockquote>
                <span >{data.author}</span>
                {/* <div>
                    <button  >New Quote</button>
                    <button>Tweet</button>
                </div> */}

            </div>

        </>
    )
}

export default quotes
