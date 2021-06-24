import React, { useState } from 'react';
import { pixabayKey } from '../../constants';
import './component.css';

const SearchInput = () => {
  const [inputValue, setInputValue] = useState(" ");
  const [photos, setPhotos] = useState();

  const handleSubmit = () => {
    fetch(`https://pixabay.com/api/?key=${pixabayKey}&q=${encodeURIComponent(inputValue)}&image_type=photo`)
    .then(res => res.json())
    .then ( (result) => {
      setPhotos(result)
    },
    (error) => {
      console.log(error);
    })
  }

  return (
    <div className="search_container">
      <input className="search_input" type="text" onChange={ e => setInputValue(e.target.value)} value={inputValue} />
      <button className="search_button" onClick={handleSubmit}> Search </button>  
      <div>
        <ul className="list_item_container"> {photos && photos.hits && photos.hits.map((photo) => {
          return <li key={photo.id} className="list_item">
            <img className="img_style" src={photo.webformatURL} alt={photo.previewURL} />
          </li>
          })} 
        </ul>  
      </div>
    </div>
  )
}

export default SearchInput

