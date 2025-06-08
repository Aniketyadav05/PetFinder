import React, { useEffect, useState } from 'react'
import { getPets } from '../api/petFinder'
import PetCard from '../Components/PetCard'
import fallback from '../assets/fallback.jpg'
const PetList = () => {
  const [Filter,setFilter] = useState('')
  const [Page,setPage] = useState(1)
  const [loading, setLoading] = useState(false);

  const [pets,setPets] = useState([])
  useEffect(() => {
  console.log("Fetching pets with type:", Filter, "and page:", Page);
  const fetchPets = async () => {
    setLoading(true);
    try {
      const data = await getPets({ type: Filter, page: Page });
      setPets(data.animals);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  
    setPage(1);
    fetchPets();

}, [Filter, Page]);

  return (
    <div className="px-12 py-6 mt-14 ">
  <div className='flex flex-col justify-center items-center mb-6'>
    <h1 className="text-[#442001]  text-3xl font-bold ">Find your Match</h1>
  
    <select
          value={Filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border bg-yellow-400 font-bold px-4 py-2 rounded-2xl cursor-pointer"
        >
          <option value="">All Types</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="rabbit">Rabbit</option>
        </select>
  </div>
  
  { !loading?<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
    {pets.slice(0, 20).map((pet) => (
      <div key={pet.id} className="rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
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
    <div className="w-full flex items-center justify-center">
  <button
    className="bg-yellow-400 cursor-pointer text-black px-5 sm:px-6 py-2 rounded-md font-bold shadow-md hover:bg-yellow-500 transition-all"
    onClick={() => (Page > 1 ? setPage(Page - 1) : setPage(1))}
  >
    Prev
  </button>
  <span className="font-bold text-xl mx-4">{Page}</span>
  <button
    className="bg-yellow-400 cursor-pointer text-black px-5 sm:px-6 py-2 rounded-md font-bold shadow-md hover:bg-yellow-500 transition-all"
    onClick={() => setPage(Page + 1)}
  >
    Next
  </button>
</div>

  </div>
  
: <div>Loaidng</div>
  }
</div>
  )
}

export default PetList