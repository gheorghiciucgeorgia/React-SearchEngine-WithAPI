import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/page-content.scss'

export default function ContentPage() {
  return (
    <div className='content-page'>
      <div className='search-container'>
        <form>
          <button type="submit"><FontAwesomeIcon className="search-icon" icon={faSearch} /></button>
          <input type='text' placeholder='Search Article'></input>
        </form>
      </div>
    </div>
  )
}
