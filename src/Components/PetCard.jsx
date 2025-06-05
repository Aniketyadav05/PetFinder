import React from 'react'
import { useNavigate } from 'react-router-dom'
const PetCard = ({image="../assets/fallback.jpg", name, type,num, id}) => {
  const navigate = useNavigate();
  const colors = ["bg-[#EF673C]", "bg-[#367947]", "bg-[#442001]"];
  const bgColor = colors[num % 3];
  const handleMoreDetails = () => {
    navigate(`/pet-details/${id}`);
  }
  return (
    <div className='className="bg-[#EF673C] rounded-2xl overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300"'>
      
      <div className={`rounded-xl max-w-xs mx-auto w-full ${bgColor}   flex flex-col items-center justify-center p-4 `}>
        <img className='w-32 h-32 sm:w-40 sm:h-40 object-cover  border-1 rounded-2xl mt-2' src={image} alt="" />
        <h1 className='text-lg sm:text-xl font-bold mt-4 text-center'>Name:{name}</h1>
        <h2 className='text-white text-sm sm:text-base mb-4'>Type:{type}</h2>
        <button
        onClick={handleMoreDetails}
        className="bg-yellow-400 border-2 border-[#442001] text-black px-6 py-2 rounded-2xl cursor-pointer font-bold shadow-md hover:bg-white transition-all">More Details</button>
      </div>
    </div>
  )
}

export default PetCard