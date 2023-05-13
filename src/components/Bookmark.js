import React from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import '../styles/page-content.scss';



export default function Bookmark({ bookmark, setBookmark }) {
    bookmark = JSON.parse(localStorage.getItem('bookmarkss'));
    return (
        <div>
            <Navbar></Navbar>
            <div className='bookmark-component'>
                <div className='bookmark-items-header'>Saved items</div>

                {bookmark.length === 0 && (<div className='bookmark-items-empty'>No items are added <FontAwesomeIcon icon={faFaceSadTear} /></div>)}
                <div>
                    <div className='bookmark-items-component'>

                        {bookmark.map((item) => {
                            return (
                                <div className='bookmark-box' key={item.id}>
                                    <div className='card'>
                                        <img src={item.largeImageURL} alt={item.tags} className='card-img-top' />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>


        </div>
    )
}
