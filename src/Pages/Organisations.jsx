import React, { useEffect, useState } from 'react'
import { getOrgs } from '../api/petFinder'
import OrganizationCard from '../Components/OrganizationCard'
import fallback from '../assets/fallback.jpg'
import Loader from '../Components/Loader'
const Organisations = () => {
  const [orgs, setOrgs] = useState([])
  const [loading , setLoading] = useState(false)
  useEffect(() => { 
    const fetchOrgs = async () => {
      setLoading(true)
      try {
        const data = await getOrgs();
        setOrgs(data.organizations)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchOrgs()
  },[])
  return (
    <div className="px-8 py-6 mt-14">
  <h1 className="text-[#442001] mt- text-3xl font-bold mb-6">Trusted Pet Organization</h1>
    {!loading?
  <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
    {orgs.slice(0, 20).map((org,index) => (
      <div key={org.id} className="bg-[#EF673C] rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
        <OrganizationCard
          key={org.id}
          name={org.name} 
          num={index} 
          image={org.photos 
            && org.photos.length > 0 
            ? org.photos[0].medium || org.photos[0].small 
            : fallback} 
            address={org.address}
        />
      </div>
    ))}
  </div>
: <div className='flex justify-center items-center mt-20'>
  <Loader/>
  </div>}
  </div> 
     
  )
}

export default Organisations