import React from 'react'

const Confirmride = ({setconfirmridepanel}) => {
  return (
    <div className=" bottom-0 w-full bg-white p-5 rounded-t-3xl shadow-lg">
      {/* Drag Indicator */}
      <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-4">Confirm your Ride</h2>

      {/* Ride Info */}
      <div className="flex items-center gap-3 border-b py-3">
        <i className="ri-map-pin-user-fill text-green-600 text-xl"></i>
        <div>
          <p className="text-sm text-gray-500">Pickup</p>
          <p className="font-medium">db mall</p>
        </div>
      </div>

      <div className="flex items-center gap-3 border-b py-3">
        <i className="ri-map-pin-2-fill text-red-500 text-xl"></i>
        <div>
          <p className="text-sm text-gray-500">Destination</p>
          <p className="font-medium">railwaystaion</p>
        </div>
      </div>

      <div className="flex items-center gap-3 border-b py-3">
        <i className="ri-money-rupee-circle-fill text-gray-700 text-xl"></i>
        <div>
          <p className="text-sm text-gray-500">Price</p>
          <p className="font-medium">₹ 128</p>
        </div>
      </div>
      <button onClick={()=>{
        setconfirmridepanel(false)

      }} className="w-full mt-5 bg-black text-white py-3 rounded-lg font-semibold">
        Confirm Ride
      </button>
    </div>
  );
}

export default Confirmride