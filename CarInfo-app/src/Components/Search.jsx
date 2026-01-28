import React from 'react'

function Search() {
  return (
    <div className='Search-block'>
      <h2><span className='highlighted'>Search for Cars</span></h2>
      <input type="text" placeholder='Search by car name or model' className='search-input' />
    </div>
  )
}

export default Search
