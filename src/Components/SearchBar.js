import React, {useState} from 'react'

export default function SearchBar(props) {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div id='searchbar'>
            <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder='Search Term' />
            <button onClick={e => props.setSearchTerm(searchTerm)} >Search</button>
        </div>
    )
}
