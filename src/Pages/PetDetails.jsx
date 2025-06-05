import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPet } from '../api/petFinder';
import sideBg from '../assets/sideBg.jpg'
const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const fetchPet = async () => {
      const data = await getPet({ id });
      setPet(data.animal);
    };
    fetchPet();
  }, [id]);

  if (!pet) return <div className="text-center mt-10">Loading...</div>;

  const address = pet.contact?.address;

  return (
    <div className="relative h-screen w-full">
     <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sideBg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/40 "></div>
      <div className="relative max-w-5xl mx-auto p-6 top-1/6">
      <div className="bg-[#EF673C] rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Image Section */}
        <img
          src={pet.photos?.[0]?.large || '/fallback.jpg'}
          alt={pet.name}
          className="w-full lg:w-1/2 h-80 object-cover rounded-2xl m-6"
        />

        {/* Details Section */}
        <div className="p-6 flex-1">
          <h1 className="text-3xl font-bold text-[#442001]">{pet.name}</h1>
          <p className={`${pet.description?"text-green-500":"text-black"} font-bold text-md mt-2`}>{pet.description || "No description available."}</p>

          <div className="mt-4">
            <span className="inline-block bg-[#442001] text-white px-3 py-1 rounded-full text-sm font-semibold">
              Type: {pet.type}
            </span>
            <span className={`inline-block ${pet.status==="adoptable" ?" bg-[#367947]":"bg-red"} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
              STATUS: {pet.status}
            </span>
            <span className="inline-block bg-[#442001] text-white px-3 py-1 rounded-full text-sm font-semibold">
              Type: {pet.type}
            </span>
            <span className="inline-block bg-[#442001] text-white px-3 py-1 rounded-full text-sm font-semibold">
              Type: {pet.type}
            </span>
            <span className="inline-block bg-[#442001] text-white px-3 py-1 rounded-full text-sm font-semibold">
              Type: {pet.type}
            </span>
            <span className="inline-block bg-[#442001] text-white px-3 py-1 rounded-full text-sm font-semibold">
              Type: {pet.type}
            </span>
          </div>

          {/* Contact Dropdown */}
          <div className="mt-6">
            <button
              onClick={() => setShowContact(!showContact)}
              className="bg-yellow-400 text-black px-6 py-2 rounded-md font-bold shadow-md hover:bg-yellow-500 transition-all cursor-pointer"
            >
              {showContact ? "Hide" : "Show"} Contact Details 
            </button>

            {showContact && (
              <div className="mt-4 text-[#EF673C] font-extrabold rounded-lg p-4">
                <h2 className="text-lg font-semibold text-white mb-2">Contact Address:</h2>
                <p ><strong className='text-white'>Address:</strong> {address?.address1 || "N/A"}</p>
                <p><strong className='text-white'>City:</strong> {address?.city || "N/A"}</p>
                <p><strong className='text-white'>State:</strong> {address?.state || "N/A"}</p>
                <p><strong className='text-white'>Country:</strong> {address?.country || "N/A"}</p>
                <p><strong className='text-white'>Postcode:</strong> {address?.postcode || "N/A"}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PetDetails;
