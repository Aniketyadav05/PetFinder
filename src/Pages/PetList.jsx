import React, { useEffect, useState } from 'react'
import { getPets } from '../api/petFinder'
import PetCard from '../Components/PetCard'
import fallback from '../assets/fallback.jpg'
const PetList = () => {
  const [pets,setPets] = useState([])
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
  return (
    <div className="px-8 py-6 mt-14">
  <h1 className="text-[#442001] mt- text-3xl font-bold mb-6">Find your Match</h1>

  {/* Masonry grid using CSS columns */}
  <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
    {pets.slice(0, 20).map((pet) => (
      <div key={pet.id} className="bg-[#EF673C] rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
        <PetCard
          id={pet.id}
          name={pet.name}
          num={pet.id}
          image={
            pet.photos && pet.photos.length > 0
              ? pet.photos[0].medium || pet.photos[0].small
              : fallback
          }
          type={pet.type}
        />
      </div>
    ))}
  </div>
</div>

  )
}

export default PetList