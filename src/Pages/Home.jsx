import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import PetCard from '../Components/PetCard'
import { getOrgs, getPets } from '../api/petFinder'
import fallback from '../assets/fallback.jpg'
import OrganizationCard from '../Components/OrganizationCard'
const Home = () => {
  const [pets,setPets] = useState([])
  const [orgs,setOrgs] = useState([])
  useEffect(() => {
    const fetchPets =async ()=>{
      try {
        const data = await getPets();
        console.log(data.animals)
        setPets(data.animals)
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchPets()
  },[])
  useEffect(() => {
    const fetchOrgs =async ()=>{
      try {
        const data = await getOrgs();
        console.log(data)
        setOrgs(data.organizations)
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchOrgs()
  },[])
  return (
    <div className='mt-4'>
      <Hero/>
      <h1 className="text-[#442001] my-2">Find your Match</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mx-6">
        {pets.slice(8,12).map((pet) => (
          <PetCard key={pet.id} id={pet.id} name={pet.name} num={pet.id} image={pet.photos && pet.photos.length > 0 ? pet.photos[0].medium || pet.photos[0].small : fallback} type={pet.type}/>
        ))}
      </div>
      <h1 className="text-[#442001] my-2">Trusted Pet Organizations</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mx-6">
        {orgs.slice(8,12).map((org, index) => (
          <OrganizationCard key={org.id} name={org.name} num={index} image={org.photos && org.photos.length > 0 ? org.photos[0].medium || org.photos[0].small : fallback} address={org.address}/>
        ))}
      </div>
    </div>
  )
}

export default Home