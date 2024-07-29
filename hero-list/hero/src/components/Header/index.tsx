import {useState, Dispatch, SetStateAction} from 'react';
import { IoIosSearch } from "react-icons/io";
import IChamp from '../../Interface/IChamp';

const SearchBar = ({search, fightList, setChampion} : {search: (value: string) => void, fightList: Array<IChamp> | undefined, setChampion: Dispatch<SetStateAction<string>>}) => {
  const [inputValue, setInputValue] = useState('');


  const handleChampion = () => {
    let heroChampion;
    if (fightList) {
      heroChampion = fightList.reduce((champion, hero) => {
        if (!hero) {
          return champion
        } else if (!champion) {
          return hero;
        } else if (hero.heroPower > champion.heroPower) {
            return hero;
        } else {
          return champion
        }
      }, null)
    }
    console.log(heroChampion);
    setChampion((prev) => heroChampion);
  }

  
  return (
    <div className=' bg-stone-700'>
      <div className='flex flex-row justify-between w-[90%]'>
        <label htmlFor="search">
            <input 
              id="search"
              type='text'  
              className='bg-transparent pl-14 py-3 text-stone-200 
                focus:border-0 focus:outline-none active:border-0 active:outline-none  '
              placeholder="Hero search"
              value={inputValue}
              onChange={(e)=>{setInputValue(e.target.value)}}
            />
        </label>
        <div className='flex gap-5'>
          <button className=" text-stone-300 text-xl w-[50px]" aria-label='search button'
          onClick={() => {search(inputValue)}}
            >
              <div className='w-fit m-auto'>
                <IoIosSearch />
              </div>
          </button>
          <button className='text-center px-6 bg-stone-400 float-right'
          onClick={handleChampion}>
            Fight
          </button>
        </div>
      </div>
    </div>
  )
}
export default SearchBar