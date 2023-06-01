import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'


const Marvel = () => {
const {id} = useParams();
const [item,setItem] = useState()
const fetch = async()=> {
    const res=await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=f74b340ba2e62d7b219fb01ed247a07e&hash=fcca4a10778f93eeb15ea2e29d5e2c95`);
    // setItem(res.data.results[0])
}
fetch();
  return (
    <>
    {
        (!item)? "":(
            <div className='box-content'>
                <div className='right-box'>
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}alt=''/>
                </div>
                <div className='left-box'>
                    <h2>{item.name}</h2>
                    <h5>{item.description}</h5>
                </div>
            </div>
        )
    }
    </>
  )
}

export default Marvel
