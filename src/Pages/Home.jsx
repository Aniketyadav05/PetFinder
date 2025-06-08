import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import PetCard from '../Components/PetCard'
import { getOrgs, getPets } from '../api/petFinder'
import fallback from '../assets/fallback.jpg'
import OrganizationCard from '../Components/OrganizationCard'
import ShinyText from '../Components/ShinyText'
import Loader from '../Components/Loader'
const Home = () => {
  const [pets,setPets] = useState([])
  const [orgs,setOrgs] = useState([])
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const fetchPets =async ()=>{
      try {
        const data = await getPets();
        console.log(data)
        setPets(data.animals)
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        
      }
    }
    fetchPets()

    
  },[])
  useEffect(() => {
    const fetchOrgs = async ()=>{
      try {
        const data = await getOrgs();
        console.log(data.organizations)
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
      {!loading ? <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mx-6">
        {pets.slice(8,12).map((pet) => (
          <PetCard key={pet.id} id={pet.id} name={pet.name} num={pet.id} image={pet.photos && pet.photos.length > 0 ? pet.photos[0].medium || pet.photos[0].small : fallback} type={pet.type}/>
        ))}
      </div> :
      <div className='flex justify-center items-center mt-20'>
  <Loader/>
  </div>
      }
      <h1 className="text-[#442001] my-2">Trusted Pet Organizations</h1>
      {!loading? <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mx-6">
        {orgs.slice(8,12).map((org, index) => (
          <OrganizationCard key={org.id} name={org.name} num={index} image={org.photos && org.photos.length > 0 ? org.photos[0].medium || org.photos[0].small : fallback} address={org.address}/>
        ))}
      </div>: <div className='flex justify-center items-center mt-20'>
  <Loader/>
  </div>
   }
    </div>
  ) 
}

export default Home