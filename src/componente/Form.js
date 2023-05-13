import React, { useState } from 'react'
import { Error } from './Error'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Form = ({ setSearch }) => {
	const [term, setTerm] = useState('')
	const [error, setError] = useState(false)

	const searchImages = (e) => {
		e.preventDefault()

		//validar
		if (term.trim() === '') {
			setError(true)
			return
		}

		setError(false)
		setSearch(term)
	}

	return (
		<form onSubmit={searchImages}>
			<button type='submit'><FontAwesomeIcon className="search-icon" icon={faSearch} /></button>
			<input type='text'  placeholder='Search Article' onChange={(e) => setTerm(e.target.value)}value={term}/>
			{error && <Error msj='The search is over' />}
		</form>
	)
}