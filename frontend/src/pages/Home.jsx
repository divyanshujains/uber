import React, { useRef, useState } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import Searchedlocation from './Searchedlocation';

const Home = () => {

  const [pickup, setpickup] = useState('');
  const [destination, setdestination] = useState('')
  const [panelopen, setpanelopen] = useState(false);
  const [vehiclepanel, setvehiclepanel] = useState(false);


  const panel = useRef(null);
  const vehiclepanelref = useRef(null);



const submithandler = (e) => {
  e.preventDefault();

};
useGSAP(() => {
  if (panelopen) {
    gsap.to(panel.current, {
      height: "60%",
      duration: 0.5,
      ease: "power2.out",
      
    });
  } else {
    gsap.to(panel.current, {
      height: "0%",
      duration: 0.2,
      ease: "power2.in",
    });
  }
}, [panelopen]);

useGSAP(() => {
  if (vehiclepanel) {
    gsap.to(vehiclepanelref.current, {
      height: "50%",
      duration: 0.5,
      ease: "power2.out",
    });
  } else {
    gsap.to(vehiclepanelref.current, {
      height: "0%",
      duration: 0.5,
      ease: "power2.in",
    });
  }
}, [vehiclepanel]);


  return (
    <div className="w-full h-screen  rounded-2xl overflow-hidden  relative">
      {/* Uber Logo */}
      <img
        className="w-20 absolute   left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />

      {/* Background Section */}
      <div className="bg-rose-400 h-full w-full flex items-center justify-center">
        <div
          className="h-full w-full bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1669508886393-d3ec02f4a330')",
          }}
        ></div>
      </div>

      <div className=" absolute top-0  flex flex-col justify-end  w-full h-screen   ">
        <div
          className="w-full bg-white 
          rounded-t-2xl 
                p-5 sm:p-6 md:p-8 
                max-h-[80vh] "
        >
          {/* Title */}
          <h4 className="text-lg  flex items-center justify-between sm:text-xl md:text-2xl font-semibold mb-4  sm:text-left">
            Find a Trip
            <div
              onClick={() => {
                setpanelopen(!panelopen);
              }}
              className="flex  mb-1"
            >
              <i className="ri-arrow-down-s-line text-3xl text-gray-600"></i>
            </div>
          </h4>

          {/* Form */}
          <form
            onSubmit={(e) => {
              submithandler(e);
            }}
            className="space-y-4 sm:space-y-5"
          >
            {/*set live location */}
            <button
              onClick={() => {
                setpickup("Current Location");
                setpanelopen(true);
              }}
              className=" p-1 rounded-2xl border-2  "
            >
              Add live location
            </button>
            {/* Pickup Input */}
            <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <input
                onClick={() => {
                  setpanelopen(true);
                }}
                value={pickup}
                onChange={(e) => {
                  setpickup(e.target.value);
                }}
                type="text"
                placeholder="Add a pick-up location"
                className="bg-transparent w-full focus:outline-none text-sm sm:text-base"
              />
            </div>

            {/* Destination Input */}
            <div className="flex items-center bg-gray-100 rounded-xl px-4 py-3">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
              <input
                onClick={() => {
                  setpanelopen(true);
                }}
                value={destination}
                onChange={(e) => {
                  setdestination(e.target.value);
                }}
                type="text"
                placeholder="Enter your destination"
                className="bg-transparent w-full focus:outline-none text-sm sm:text-base"
              />
            </div>

            {/* Button */}
            <button
              onClick={() => {
                setpanelopen(false);
                setvehiclepanel(true);
              }}
              type="submit"
              className="w-full bg-black text-white py-3  sm:py-3.5 
                 rounded-xl font-semibold 
                 text-sm sm:text-base 
                 hover:bg-gray-900 transition"
            >
              Search Ride
            </button>
          </form>
        </div>

        <div ref={panel} className=" bg-white  h-full">
          <Searchedlocation
            setPanelOpen={setpanelopen}
            setdestination={setdestination}
          />
        </div>
      </div>

      <div
        ref={vehiclepanelref}
        className="fixed bottom-0 left-0 w-full h-[60%] bg-white rounded-t-2xl shadow-2xl p-3"
      >
        {/* Drag Indicator */}
        <div
          onClick={() => {
            setpanelopen(setvehiclepanel(false));
          }}
          className="flex  "
        >
          <i className="ri-arrow-down-s-line text-3xl text-gray-600"></i>
        </div>

        {/* Title */}
        <h2 className="text-md font-semibold mb-2">Choose a Ride</h2>

        {/* Vehicle List */}
        <div className="space-y-1 overflow-y-auto h-[60%] pr-1">
          {/* Vehicle 1 */}
          <div className="flex active:border-2 items-center justify-between p-2 border rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <div className="flex items-center gap-2">
              <img
                src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=311/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy80M2E0ZDAzMy0zMzQ2LTRiMWEtYTQyZC1hZjRmYmUyZTkzNWUucG5n"
                alt="Moto"
                className="w-10"
              />
              <div>
                <h3 className="font-medium text-sm">Moto</h3>
                <p className="text-xs text-gray-500">2 mins away</p>
              </div>
            </div>
            <div className="text-sm font-semibold">₹128</div>
          </div>

          {/* Vehicle 2 */}
          <div className="flex active:border-2  items-center justify-between p-2 border rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <div className="flex items-center gap-2">
              <img
                src="https://img.icons8.com/color/96/sedan.png"
                alt="Uber Car"
                className="w-10"
              />
              <div>
                <h3 className="font-medium text-sm">Uber Car</h3>
                <p className="text-xs text-gray-500">4 mins away</p>
              </div>
            </div>
            <div className="text-sm font-semibold">₹210</div>
          </div>

          {/* Vehicle 3 */}
          <div className="flex  active:border-2  items-center justify-between p-2 border rounded-lg hover:bg-gray-100 cursor-pointer transition">
            <div className="flex items-center gap-2">
              <img
                src="https://img.icons8.com/color/96/auto-rickshaw.png"
                alt="Uber Auto"
                className="w-10"
              />
              <div>
                <h3 className="font-medium text-sm">Uber Auto</h3>
                <p className="text-xs text-gray-500">3 mins away</p>
              </div>
            </div>
            <div className="text-sm font-semibold">₹95</div>
          </div>
        </div>

        {/* Confirm Button */}
        <button className="w-full mt-1 bg-black text-white py-2 text-sm rounded-lg  hover:bg-gray-800 transition">
          Confirm Ride
        </button>
      </div>
    </div>
  );
}

export default Home