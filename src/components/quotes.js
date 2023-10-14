import React, { useEffect, useState } from 'react'
import './quotes.css'



const quotes = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState([]);
    // const api_url = "https://api.quotable.io/random";

    const api_fetch = () => {
        fetch("https://api.quotable.io/random")
            .then((res) => res.json())
            .then((data) => setData(data))
    };
    // const api_fetch = async (api_url) => {
    //     const res = await fetch(api_url);
    //     const data = await res.json();
    //     // console.log(data.content);
    //     setData(data);
    // };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        api_fetch();
    }, []);


    return (
        <>
            <div className="container">
                <h2>Quote of the day</h2>
                <blockquote >{data.content}</blockquote>
                <span >{data.author}</span>
                <div>
                    <button onClick={api_fetch} >New Quote</button>
                    <button>
                        <a href={`https://twitter.com/intent/tweet?text=${data.content}`} target='_blank' rel="noreferrer noopener">
                            Tweet
                        </a>
                    </button>
                </div>

            </div>

        </>
    )
}

export default quotes
