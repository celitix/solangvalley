"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

// timeline
const timeline = [
  {
    src: "/assets/gallery5.jpg",
    title: "Paragliding",
    des: "Solang is the best place to have paragliding, as the green pine forest will offer a majestic view. Paragliding can be enjoyed from Jan to May and October to December between 9:00 a.m. to 5:00 p.m. Cost of the paragliding ranges from 600 to 1800.",
  },
  {
    src: "/assets/parachute.jpg",
    title: "Parachuting",
    des: "Feel the freshness and bliss of the Valley. The pine forest view definitely has the charm to make you fly high with Parachuting sport. The professional parachuting guides take to the sky-high trip with nominal charges.",
  },
  {
    src: "/assets/gallery10.jpg",
    title: "Zorbing",
    des: "The adventurous activity zorbing will excite every fun and adventurous loving person when visiting to this place. In zorbing, a person is strapped into the giant ball making shriek and giving fun of rolling down through slope.",
  },
  {
    src: "/assets/skating.jpg",
    title: "Skating",
    des: "Move swiftly on the plane snow covered Solang. Skating among Valley adventure is fun to take. January month is the best time to visit when Solang has snow sheet over its beautiful ground.",
  },
  {
    src: "/assets/skiing.jpg",
    title: "Skiing",
    des: "At Solangvalley, skiing can be enjoyed as paragliding. This Valley has a ski slant, which makes the place perfect for skiing. Every gear to make the swift move is available at the Valley place at nominal charges.",
  },
  {
    src: "/assets/horse-riding.jpg",
    title: "Horse Riding",
    des: "Horses always fascinate people. It offers fun horse ride making way between the pines. Horse ride is given under horse guides. Per head, charges are charged for rides. Horse ride can also take you to the Shiva sanctuary.",
  },
];

const Page = () => {

  const info = [
    { label: "Floor Elevation", value: "8,400 feet" },
    { label: "Coordinates", value: "32.316°N 77.157°E" },
    { label: "Average Temperature", value: "11.7 °C" },
  ];


  return (
    <>
      {/*============ about text section ===========*/}
       <section className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/assets/about.jpg"        
        alt="Solang Valley"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Glass Content Box */}
      <div className="relative max-w-5xl mx-auto px-5">
        <div className="backdrop-blur-md bg-white/30 border border-white/40 shadow-xl rounded-lg p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white text-center font-serif ">
            Solang Valley : An Adventure Attraction
          </h2>

          <div className="w-20 h-[2px] bg-gray-400 mx-auto my-4"></div>

          <p className="text-gray-100 text-sm md:text-base leading-relaxed">
            Solang valley is also known as Solang Nala. This valley has got its name from two words:
            Solang and Nullah. It is situated 14 km from Manali. Solang valley is famous for summer
            and winter sports condition. The warm season gives you the way to have fun with sky games
            and cold snow gives you the fun of skiing in a high place. The place has got everything
            and every sport to enjoy and thrill you. The place is fun and exciting to have a camping
            and trekking. Here are the fun games and sports Solang Valley and nearby places offers to
            make you enjoy your day.
          </p>
        </div>
      </div>
    </section>


      {/*=============== Things to Do =============*/}

      <section className="relative py-10 lg:py-12 px-6 md:px-16  overflow-hidden">
        <div className="relative text-center   z-10">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-slate-800 mb-12">
            Things to Do
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="absolute hidden lg:block left-1/2 top-0 bottom-0 w-1 bg-sky-500 -translate-x-1/2 rounded-full shadow-[0_0_25px_rgba(14,118,205,0.3)]"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center  ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2 p-4 relative group">
               

                <motion.div
                  className={`relative grid grid-cols-1 ${ index % 2 === 0 ? "lg:grid-cols-[5%_32%_58%]" : "lg:grid-cols-[32%_58%_5%]" }  items-center gap-4 transition-all duration-500 rounded-2xl`} >
                  {/* ARROW COLUMN */}
                  <div
                    className={`hidden lg:flex items-start h-full text-sky-600 text-2xl ${index % 2 === 0 ? "order-1 justify-end" : "order-3 justify-start"} `} >
                    {index % 2 === 0 ? <FaArrowLeft /> : <FaArrowRight />}
                  </div>

                  {/* IMAGE */}
                  <div
                    className={` flex justify-center ${
                      index % 2 === 0 ? "order-2" : "order-1"
                    }`} >
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={300}
                      height={300}
                      className="w-40 border-10 border-gray-200 rounded-full object-cover"
                    />
                  </div>

                  {/* TEXT */}
                  <div
                    className={`flex flex-col gap-1 items-center lg:items-start justify-center ${index % 2 === 0 ? "order-3" : "order-2"} `} >
                    <h2 className="text-xl font-medium">{item.title}</h2>
                    <p className="text-base text-gray-600 text-center lg:text-start">
                      {item.des}
                    </p>
                  </div>
                </motion.div>
              </div>

             

              <div className="md:w-1/2 "></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/*================ CTA ==================*/}
      <div className="bg-cyan-500">
        <div className="container mx-auto flex flex-col space-y-4 max-w-5xl py-12 px-2">
          <div>
            <h1 className="text-4xl text-center text-white font-serif">
              Summit of the Valley
            </h1>
          </div>
          <div className="text-center text-2xl text-white">
            <p>
              Solang Valley has an interesting geographical positioning. Its
              elevation and height are making the place stand out from the rest.
              The crown of Himachal Pradesh has its charm. Know more about the
              interesting elevations and perfect positioning of the Valley.
            </p>
          </div>
        </div>
      </div>

      {/*============== Stats Section =============*/}
        <section className="w-full bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {info.map((item, index) => (
          <div
            key={index}
            className="bg-[#477cd8] text-white rounded-lg shadow-md py-8 px-6 text-center 
                       flex flex-col justify-center items-center hover:scale-105 transition-transform"
          >
            <p className="text-lg font-semibold">{item.label}: </p>
            <p className="text-xl font-bold mt-1">{item.value}</p>
          </div>
        ))}
      </div>
    </section>

    </>
  );
};

export default Page;
