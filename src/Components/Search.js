import React, {useState} from 'react'

const Search = () => {

    const [term, setTerm] = useState('')

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input  value={term} onChange={handleChange} className='input' type='text'></input>

                </div>
            </form>
        </div>
    )
}

export default Search