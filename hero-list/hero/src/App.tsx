import {useState, useEffect} from 'react';
import CardList from "./components/CardList";
import IHero from './Interface/IHero'
import Header from './components/Header';
import IChamp from './Interface/IChamp';

const getData = async (url: string) => {
  try {
    const data = await fetch(url);
    const heroes = await data.json();
    // I will map heroes here becaus i already don't know if i'll get time to do the pagination
    const heroesList = await heroes.reduce((list, hero) => {
      if (hero.id < 20) {
        const {id, name, powerstats, biography:{fullName}, images} = hero;
        list.push({id, name, powerstats, biography:{fullName}, images})
      }
      return list;
    },[])
    return heroesList;
  } catch (error) {
    console.log(error);
  }
}

const App = () => {
  const [heroesList, setHeroesList] = useState<Array<IHero>>();
  const [displayList, setDisplayList] = useState<Array<IHero>>();
  const [fightList, setFightList] = useState<Array<IChamp>>();

  useEffect(() => {
    (async () => {
      const heroes = await getData('https://homologacao3.azapfy.com.br/api/ps/metahumans');
      setHeroesList((prev) => heroes);
      setDisplayList((prev) => heroes);
    })();
  }, [])
  

  const handleSearch = (value: string) => {
    if (displayList && value !== '') {
      const newDisplayList = displayList.filter((hero: IHero) => hero.name.toLowerCase() == value.toLowerCase())
      if (newDisplayList.length > 0) {
        setDisplayList((prev) => newDisplayList);
      }
    } else {
      setDisplayList((prev) => heroesList);
    }
  }


  const data : Array<IHero> = [
    {
      id: 1,
      name: "A-Bomb",
      powerstats: {
        intelligence: 38,
        strength: 100,
        speed: 17,
        durability: 80,
        power: 24,
        combat: 64
      },
      biography: {
        fullName: "Richard Milhouse Jones",
      },
      images: {
        xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/1-a-bomb.jpg",
        sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg",
        md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg",
        lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/1-a-bomb.jpg"
      }
    },
    {
      id: 2,
      name: "Abe Sapien",
      powerstats: {
        intelligence: 88,
        strength: 28,
        speed: 35,
        durability: 65,
        power: 100,
        combat: 85
      },
      biography: {
        fullName: "Abraham Sapien",
      },
      images: {
        xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/2-abe-sapien.jpg",
        sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/2-abe-sapien.jpg",
        md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg",
        lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/2-abe-sapien.jpg"
      }
    },
    {
      id: 3,
      name: "Abin Sur",
      powerstats: {
        intelligence: 50,
        strength: 90,
        speed: 53,
        durability: 64,
        power: 99,
        combat: 65
      },
      biography: {
        fullName: ""
      },
      images: {
        xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/3-abin-sur.jpg",
        sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/3-abin-sur.jpg",
        md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg",
        lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/3-abin-sur.jpg"
      }
    }
  ]

  
  return (
    <div className="bg-stone-900 min-h-lvh py-8">
      <header>
        <Header search={handleSearch}/>
      </header>
      <main>
        <CardList heroes={data} fightList={fightList} setFightList={setFightList} />
      </main>
    </div>
  )
}

export default App