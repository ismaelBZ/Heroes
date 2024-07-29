import {useState, useEffect, Dispatch, SetStateAction} from 'react';
import BgName from './../../assets/imgs/base-name.svg';
import Fight from './../../assets/imgs/fight.svg';
import FightActive from './../../assets/imgs/fight-active.svg';
import Power from './../../assets/imgs/power.svg';
import IChamp from '../../Interface/IChamp';


const Card = ({id, name, fullName, stats, img, fightList, setFightList} : {id: number, name: string, fullName?: string, stats: object, img: string, fightList: Array<IChamp>, setFightList: Dispatch<SetStateAction<IChamp[] | undefined>>}) => {
  
  const [isInFight, setIsInFight] = useState(false)
  const heroStats = Object.entries(stats);
  const heroPower = (Object.values(stats).reduce((power, stat) => {
    power += stat
    return power;
  }, 0))
  
  useEffect(() => {
    if (isInFight) {
      let newFightList: Array<IChamp>;
        if(!fightList) {
          newFightList = [{
              id: id,
              name: name,
              fullName: fullName,
              heroPower: heroPower,
              img: img
            }]
          } else {
            newFightList = [...fightList,
              {
                id: id,
                name: name,
                fullName: fullName,
                heroPower: heroPower,
                img: img
              }]
          }
        setFightList((prev) => newFightList);
      }
  }, [isInFight])

  
  return (
      <div className='relative w-[320px] h-[360px] overflow-hidden'>
        <img src={img} alt='' aria-label='hero-image' />
        <div className="absolute top-0 left-0 ml-[10px] mt-[12px] w-[300px] h-[333px] border-[3px] border-stone-900">
          <div className='absolute -top-2 -left-2'>
            <div className='grid grid-cols-1 grid-rows-1 items-center'>
              <img src={Power} className="w-[70px] col-start-1 row-start-1 " alt="" />
              <p className="font-sans font-bold text-xl text-center col-start-1 row-start-1">{heroPower}</p>
            </div>
          </div>
          <div className='absolute -left-1 -bottom-1 w-[120%]'>
            <img src={BgName} className='w-[302px]' alt='' />
            <div className='absolute bottom-1 w-[302px] px-3 flex flex-row justify-between items-center ' >
              <div className="flex flex-col">
                <h2 className='font-serif text-xl font-bold text-stone-800'>{name}</h2>
                <h3 className='font-sans font-bold text-gray-700'>{fullName || 'Unkown'}</h3>
              </div>
              <button 
                aria-label='fight button'
                className="relative" 
                onClick={() => setIsInFight((prev) => !prev)}
              >
                {isInFight ?
                  <img className="max-w-[90%] h-auto" src={FightActive} alt='' />
                  :
                  <img className="max-w-[90%] h-auto" src={Fight} alt='' />
              }
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Card