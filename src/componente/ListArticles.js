import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faComments } from '@fortawesome/free-solid-svg-icons';
import { Modal, Button } from "react-bootstrap";
import '../styles/page-content.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ListArticles = ({ articles, handleClick }) => {
	const article = articles.slice(1, 4);
	const [visible, setVisible] = useState(false);
	const handleToogle = () => {
		setVisible(true);
	}
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);
	return (
		<>
			<div className='content-list'>
				<p className='subtitle'>Popular</p>
				{articles.slice(0, 1).map((article) => (
					<div>
						<div className='card'>
							<div className='img-card'>
								<button onClick={handleShow}><img src={article.largeImageURL} alt={article.tags} className='card-img-top' /></button>
							</div>
							<div className='card-body'>
								<p className='title'>{article.views}</p>
								<p className='text'>
									{article.tags}
								</p>
								<div className='card-footer'>
									<div class='by'>
										<p className='user'>
											{article.user}
										</p>
										<div className='social'>
											<p className='card-text m-0'>
												{article.likes} <FontAwesomeIcon icon={faHeart} />
											</p>
											<p>{articles.comments}<FontAwesomeIcon icon={faComments} /></p>
										</div>
									</div>
									<div className='btn-bookmark'>
										<button onClick={() => handleClick(article)} ><FontAwesomeIcon icon={faBookmark} /></button>
									</div>
								</div>
							</div>
						</div>
						<Modal show={show}>
							<Modal.Header closeButton>
							</Modal.Header>
							<Modal.Body>
								<img src={article.largeImageURL} alt={article.tags} />
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={handleClose}>Close Modal</Button>
							</Modal.Footer>
						</Modal>

					</div>


				))}

			</div >
			<div className='col row'>
				{article.map((article) => (
					<div className='col-12 col-sm-6 col-md-4 col-lg-4 mb-4 edit'>
						<div className='card'>
							<div className='img-card'>
								<button onClick={handleShow}><img src={article.largeImageURL} alt={article.tags} className='card-img-top' /></button>
							</div>
							<div className='card-body'>
								<p className='title'>{article.views}</p>
								<p className='text'>
									{article.tags}
								</p>
								<div className='card-footer'>
									<div class='by'>
										<p className='user'>
											{article.user}
										</p>
										<div className='social'>
											<p className='card-text m-0'>
												{article.likes} <FontAwesomeIcon icon={faHeart} />
											</p>
											<p>{articles.comments}<FontAwesomeIcon icon={faComments} /></p>
										</div>
									</div>
									<div className='btn-bookmark'>
										<button onClick={() => handleClick(article)} ><FontAwesomeIcon icon={faBookmark} /></button>
									</div>
								</div>
							</div>
						</div>
						<Modal show={show}>
							<Modal.Header closeButton>
							</Modal.Header>
							<Modal.Body>
								<img src={article.largeImageURL} alt={article.tags} />
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={handleClose}>Close Modal</Button>
							</Modal.Footer>
						</Modal>
					</div>
				))}
			</div>
			<div className='see-all'>
				<button onClick={handleToogle}>See All Popular Article </button>
			</div>

			{
				visible === true &&
				<>
					<div className='title-all'>All articles</div>
					<div className='col'>
						{articles.slice(4, 20).map((article) => (
							<div>
								<div className='all-card'>
									<div className='img-card'>
										<button onClick={handleShow}><img src={article.largeImageURL} alt={article.tags} className='card-img-top' /></button>
									</div>
									<div className='card-body'>
										<p className='title'>{article.views}</p>
										<p className='text'>
											{article.tags}
										</p>
										<div className='card-footer'>
											<div class='by'>
												<p className='user'>
													{article.user}
												</p>
												<div className='social'>
													<p className='card-text m-0'>
														{article.likes} <FontAwesomeIcon icon={faHeart} />
													</p>
													<p>{articles.comments}<FontAwesomeIcon icon={faComments} /></p>
												</div>
											</div>
											<div className='btn-bookmark'>
												<button onClick={() => handleClick(article)} ><FontAwesomeIcon icon={faBookmark} /></button>
											</div>
										</div>
									</div>
								</div>
								<Modal show={show}>
									<Modal.Header closeButton>
									</Modal.Header>
									<Modal.Body className='modal-body'>
										<img src={article.largeImageURL} alt={article.tags} />
									</Modal.Body>
									<Modal.Footer>
										<Button variant="secondary" onClick={handleClose}>Close Modal</Button>
									</Modal.Footer>
								</Modal>
							</div>
						))}
					</div>
				</>
			}
		</>
	)
}