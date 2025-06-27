import React, { useState, useEffect } from 'react'
import { Form } from './Form'
import { ListPopularArticles} from './ListPopularArticles'
import '../styles/page-content.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function PopularArticles() {
	const [search, setSearch] = useState('')
	const [listResult, setListResult] = useState([])
	const [bookmark, setBookmark] = useState([]);
	
	const handleClicks = (item) => {
		if (bookmark.indexOf(item) !== -1) return;
		setBookmark([...bookmark, item]);
	  }

	useEffect(() => {
		const pixabayApi = async () => {
			if (search === '') return

			const key = 'PERSONAL KEY'
			const url = `https://pixabay.com/api/?key=${key}&q=${search}&image_type=photo&order=popular`

			const response = await fetch(url)
			const result = await response.json()

			setListResult(result.hits)

			const scroll = document.querySelector('.scroll')
			scroll.scrollIntoView({ behavior: 'smooth' })


		}
        console.log('word searched',search)
        const word=search;
        localStorage.setItem('search',JSON.stringify(word))
		console.log('bookmarks',bookmark)
		const loc=bookmark;
		localStorage.setItem('bookmarkss',JSON.stringify(loc));
		pixabayApi()

	}, [search,bookmark])

	return (
		<div className='content-page'>
			<div className='scroll search-container'>

				<Form setSearch={setSearch} />
			</div>

			{listResult.length > 0 && <ListPopularArticles articles={listResult} handleClicks={handleClicks} />}

		</div>
	)
}

export default PopularArticles
