import React, { useEffect, useState } from 'react'
import { useDebounce } from 'react-use';

const Search = ({ searchTerm,setSearchTerm,typeRef }) => {
  const [inputValue,setInputValue] = useState('');

  useEffect(()=>{
    if(!searchTerm)setInputValue('');
  },[searchTerm])

  const handleKeyDown = (e) => {
    setSearchTerm(inputValue.trim());
    typeRef.current?.blur();
  }

  return (
    <>
        <input type='text' ref={typeRef} value={inputValue} onChange={(e)=>setInputValue(e.target.value)}  onKeyDown={(e)=> {if(e.key === 'Enter'){handleKeyDown()}}} className="text-2xl border-2 p-1 ml-4 w-36 cursor-pointer lg:w-36 lg:p-4 xl:w-76"  />
        
    </>
  )
}

export default Search