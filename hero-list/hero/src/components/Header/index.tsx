import {useState} from 'react';
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({search} : {search: (value: string) => void}) => {
  const [inputValue, setInputValue] = useState('')
  
  return (
    <div className=' bg-stone-700 flex flex-row'>
      <label htmlFor="search">
        <input 
          id="search"
          type='text'  
          className='bg-transparent px-14 py-3 text-stone-200 
            focus:border-0 focus:outline-none active:border-0 active:outline-none  '
          placeholder="Hero search"
          value={inputValue}
          onChange={(e)=>{setInputValue(e.target.value)}}
        />
      </label>
      <button className="text-stone-300 text-xl" aria-label='search button'
      onClick={() => {search(inputValue)}}
        >
        <IoIosSearch />
      </button>
      <button>
        
      </button>
    </div>
  )
}
export default SearchBar