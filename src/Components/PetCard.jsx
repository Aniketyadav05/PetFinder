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
    <div className='w-full'>
      
      <div className={`rounded-xl max-w-xs mx-auto w-full ${bgColor}   flex flex-col items-center justify-center p-4 `}>
        <img className='w-32 h-32 sm:w-40 sm:h-40 object-cover  border-1 rounded-2xl mt-2' src={image} alt="" />
        <h1 className='text-lg sm:text-xl font-bold mt-4 text-center'>Name:{name}</h1>
        <h2 className='text-white text-sm sm:text-base mb-4'>Type:{type}</h2>
        <button
        onClick={handleMoreDetails}
        className='bg-white w-[70%] p-1 border-2 border-[#442001] rounded-xl font-bold text-[#442001]'>More Details</button>
      </div>
    </div>
  )
}

export default PetCard