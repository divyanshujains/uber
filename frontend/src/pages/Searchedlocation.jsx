import React from "react";

const Searchedlocation = ({ setdestination , setPanelOpen }) => {
  const locations = [
    {
      name: "Bhopal Railway Station",
      address: "Hamidia Rd, Near Platform 1, Bhopal, MP 462001",
      type: "Railway Station",
    },
    {
      name: "DB Mall",
      address: "Zone-I, Maharana Pratap Nagar, Bhopal, MP 462011",
      type: "Shopping Mall",
    },
    {
      name: "ISBT Bhopal",
      address: "Near Habibganj Railway Station, Bhopal, MP",
      type: "Bus Terminal",
    },
    {
      name: "AIIMS Bhopal",
      address: "Saket Nagar, Bhopal, MP 462020",
      type: "Hospital",
    },
    {
      name: "New Market",
      address: "TT Nagar, Bhopal, MP 462003",
      type: "Market Area",
    },
    {
      name: "Rani Kamlapati Railway Station",
      address: "Habibganj, Bhopal, MP 462023",
      type: "Railway Station",
    },
  ];

  return (
    <>
     

      <div className="space-y-3 px-4 max-h-84 p-1  bg-white overflow-y-auto">
        {locations.map((place, index) => (
          <div
            key={index}
            onClick={() => {
              setdestination(place.name);
        
            }}
           
            className="flex items-start gap-3 p-3 active:border-2  bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition"
          >
            <i className="ri-map-pin-line text-base text-gray-500 mt-1"></i>

            <div className="flex flex-col">
              <span className="text-xs font-semibold text-gray-800">
                {place.name}
              </span>

              <span className="text-[11px] text-gray-500">{place.address}</span>

              <span className="text-[10px] text-gray-400 mt-1">
                {place.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Searchedlocation;
