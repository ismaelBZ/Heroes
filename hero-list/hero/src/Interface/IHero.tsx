interface IHero {
  id: number,
  name: string,
  powerstats: {
    intelligence: number,
    strength: number,
    speed: number,
    durability: number,
    power: number,
    combat: number
  },
  biography: {
    fullName?: string,
  },
  images: {
    xs: string,
    sm: string,
    md: string,
    lg: string,
  }
}

export default IHero