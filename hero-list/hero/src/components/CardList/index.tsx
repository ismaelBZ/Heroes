import {useState, Dispatch, SetStateAction} from 'react';
import Card from "../Card";
import IHero from './../../Interface/IHero';
import IChamp from '../../Interface/IChamp';

const CardList = ({heroes, fightList, setFightList}: {heroes: Array<IHero>, fightList: Array<IChamp> | undefined, setFightList: Dispatch<SetStateAction<IChamp[] | undefined>>}) => {
  
  return (
    <ul 
      className='
        px-5 py-10
        mx-auto flex flex-col gap-7 
        md:flex-row flex-wrap md:px-10
      '
    >
      { heroes.map(({id, name, biography:{fullName}, powerstats, images:{md: img}})  => {
        return (
          <li key={id} className='mx-auto '>
            <Card id={id} name={name} fullName={fullName} img={img} stats={powerstats} setFightList={setFightList} fightList={fightList} />
          </li>
        )
      })}
    </ul>
  )
}
export default CardList;