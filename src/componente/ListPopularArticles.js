import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { ListArticles} from './ListArticles'

export const ListPopularArticles = ({ articles, handleClicks }) => {
	const article = articles.slice(1, 4);
	const [visible, setVisible] = useState(false);
	const handleToogle = () => {
		setVisible(true);
	}
	return (
		<>
			<div >
				{articles.slice(0, 1).map((article) => (
					<div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
						<div className='card'>
							<img src={article.previewURL} alt={article.tags} className='card-img-top' />

							<div className='card-body text-center text-info'>
								<p className='card-text m-0'>
									Likessss {article.likes}
								</p>
								<p className='card-text m-0'>
									Views {article.views}
								</p>
								<p>
									{article.tags}
								</p>
							</div>

							<div className='card-footer'>
								<button onClick={() => handleClicks(article)} ><FontAwesomeIcon icon={faBookmark} /></button>
							</div>
						</div>
					</div>

				))}

			</div>
			<div className='col-12 py-3 px-2 m-0 row'>
				{article.map((article) => (
					<div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
						<div className='card'>
							<img src={article.previewURL} alt={article.tags} className='card-img-top' />

							<div className='card-body text-center text-info'>
								<p className='card-text m-0'>
									Likessss {article.likes}
								</p>
								<p className='card-text m-0'>
									Views {article.views}
								</p>
								<p>
									{article.tags}
								</p>
							</div>

							<div className='card-footer'>
								<button onClick={() => handleClicks(article)} ><FontAwesomeIcon icon={faBookmark} /></button>
							</div>
						</div>
					</div>
				))}
			</div>
			<button onClick={handleToogle}>See All Popular Article </button>
			{visible === true &&
				<ListArticles articles={articles} handleClicks={handleClicks} />}
		</>
	)
}