import React, { useState, useEffect } from 'react'
import { Form } from './Form'
import { ListArticles } from './ListArticles'
import '../styles/page-content.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContentPage() {
	const [search, setSearch] = useState('')
	const [listResult, setListResult] = useState([])
	const [actualPage, setActualPage] = useState(1)
	const [totalPages, setTotalPages] = useState(1)
	const [bookmark, setBookmark] = useState([]);

	const handleClicks = (item) => {
		if (bookmark.indexOf(item) !== -1) return;
		setBookmark([...bookmark, item]);
	}

	useEffect(() => {
		const pixabayApi = async () => {
			if (search === '') return

			const imagesPerPage = 24
			const key = '36306082-a5c34ad961d92290a4d04a55e'
			const url = `https://pixabay.com/api/?key=${key}&q=${search}&image_type=photo&order=popular&per_page=${imagesPerPage}&page=${actualPage}`

			const response = await fetch(url)
			const result = await response.json()

			setListResult(result.hits)

			const calcTotalPage = Math.ceil(
				result.totalHits / imagesPerPage
			)
			setTotalPages(calcTotalPage)

			const scroll = document.querySelector('.scroll')
			scroll.scrollIntoView({ behavior: 'smooth' })


		}
		console.log('bookmarks', bookmark)
		const loc = bookmark;
		localStorage.setItem('bookmarkss', JSON.stringify(loc));
		pixabayApi()
	}, [search, actualPage, bookmark])

	const oldPage = () => {
		const newActualPage = actualPage - 1
		if (newActualPage < 1) {
			return
		}
		setActualPage(newActualPage)
	}

	const newPage = () => {
		const newActualPage = actualPage + 1
		if (newActualPage > totalPages) {
			return
		}
		setActualPage(newActualPage)
	}

	return (
		<div className='content-page'>
			<div className='scroll search-container'>

				<Form setSearch={setSearch} />
			</div>

			{listResult.length > 0 && <ListArticles articles={listResult} handleClick={handleClicks} />}


			<div className='btns' >
				<div className='btn-old'>
					{actualPage > 1 && (
						<button className='btn-btn-old' onClick={oldPage}> ← New Post</button>
					)}
				</div>
				<div className='btn-new'>
					{actualPage < totalPages && (
						<button className='btn-btn-new' onClick={newPage}>Old Post →</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default ContentPage