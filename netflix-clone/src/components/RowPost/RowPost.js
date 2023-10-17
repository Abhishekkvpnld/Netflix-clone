import React, { useState, useEffect } from 'react'
import "./RowPost.css"
import axios from "../../axios/axios"
import { imageUrl } from '../../constants/constants';

function RowPost(props) {
  const [Movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(props.url).then((Response) => {
      setMovie(Response.data.results)
    })
  }, [])

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          Movie.map((obj) =>

              <img className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="image"  />

          )
        }
      </div>
    </div>
  )
}

export default RowPost;