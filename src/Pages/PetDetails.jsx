import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPet } from '../api/petFinder';
import sideBg from '../assets/sideBg.jpg';
import fallback from '../assets/fallback.jpg'
import Loader from '../Components/Loader'
const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const fetchPet = async () => {
      
      try {
        const data = await getPet({ id });
      setPet(data.animal);
      
      } catch (error) {
        console.log(error)
        
      }
    };
    fetchPet();
  }, [id]);

  if (!pet) return <div className='mt-40'>
    <div className='flex justify-center items-center mt-20'>
  <Loader/>
  </div>
  </div>

  const address = pet.contact?.address;

  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${sideBg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 pt-32">
        <div className="bg-[#EF673C] rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 p-4 sm:p-6">
            <img
              src={pet.photos?.[0]?.large || fallback}
              alt={pet.name}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl"
            />
          </div>

          {/* Details Section */}
          <div className="p-4 sm:p-6 flex-1 text-white ">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#442001]">{pet.name}</h1>
            <p className={`${pet.description ? 'text-green-500' : 'text-black'} font-bold text-sm sm:text-md mt-2`}>
              {pet.description || "No description available."}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-[#442001] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                TYPE: {pet.type}
              </span>
              <span className={`text-white px-3 py-1 rounded-lg text-sm font-semibold ${pet.status === "adoptable" ? "bg-[#367947]" : "bg-red-500"}`}>
                STATUS: {pet.status}
              </span>
              <span className="bg-[#442001] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                AGE: {pet.age}
              </span>
              <span className="bg-[#442001] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                SPECIES: {pet.species}
              </span>
              <span className="bg-[#442001] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                BREED: {pet.breed || "N/A"}
              </span>
              <span className="bg-[#442001] text-white px-3 py-1 rounded-lg text-sm font-semibold">
                SIZE: {pet.size}
              </span>
            </div>

            {/* Contact Dropdown */}
            <div className="mt-6">
              <button
                onClick={() => setShowContact(!showContact)}
                className="bg-yellow-400 text-black cursor-pointer px-5 sm:px-6 py-2 rounded-md font-bold shadow-md hover:bg-yellow-500 transition-all"
              >
                {showContact ? "Hide" : "Show"} Contact Details
              </button>

              {showContact && (
                <div className="mt-4 text-white font-semibold bg-black/30 p-4 rounded-lg">
                  <h2 className="text-lg font-semibold mb-2">Contact Details</h2>
                  <p><strong>Address:</strong> {address?.address1 || "N/A"}</p>
                  <p><strong>City:</strong> {address?.city || "N/A"}</p>
                  <p><strong>State:</strong> {address?.state || "N/A"}</p>
                  <p><strong>Country:</strong> {address?.country || "N/A"}</p>
                  <p><strong>Postcode:</strong> {address?.postcode || "N/A"}</p>
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
