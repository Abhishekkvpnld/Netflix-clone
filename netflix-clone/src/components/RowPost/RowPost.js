import React, { useState, useEffect } from 'react'
import "./RowPost.css"
import axios from "../../axios/axios"
import { API_KEY, imageUrl } from '../../constants/constants';

function RowPost() {
  const [Movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(`movie/now_playing?api_key=${API_KEY}`).then((Response) => {
      setMovie(Response.data.results)
    })
  }, [])

  return (
    <div className='row'>
      <h2>Netflix Originals</h2>
      <div className="posters">
        {
          Movie.map((obj) =>

              <img className='poster' src={`${imageUrl+obj.backdrop_path}`} alt="image"  />

          )
        }
      </div>
    </div>
  )
}

export default RowPost;