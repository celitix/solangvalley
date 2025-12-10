import HeroSection from "./components/home";
import Link from "next/link";
import { CgAdd } from "react-icons/cg";
import { MdCurrencyRupee } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { CiCloud } from "react-icons/ci";

export default function Home() {
  return (
    <>
      {/*=== Hero section ===*/}
      <HeroSection />

      {/*Text Only*/}
      <div className="container mx-auto max-w-6xl flex flex-col gap-8 py-14 px-4" >
        <div className="flex justify-center flex-col ">
          {/* <h1 className="text-[#1a6bb2] text-center text-[20px] font-serif ">Solang Valley- Ski Area in India</h1> */}
          <h2 className="text-black text-center text-[42px] font-serif " > Solang Valley- Ski Area in India</h2>

        </div>
        <div className="w-24 h-[1px] bg-[#1a6bb2] mx-auto"></div>
        <div className="flex justify-center flex-col text-center">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed font-normal ">Himachal Pradesh, a snow-laden province is hiding many of the wonders under the sheet of its icy clouds. A state proudly own most of the people’s favourite hill stations. Amidst the massive mountain ranges, there is a small Solang Valley, located away 14 kilometers from Manali, and between the way to Rohtang pass. The bright green valley covered with white snow surrounded with high peak pir panjal mountain sight grabs the attention of lots of tourists to spend their vacations and enjoy the high altitude sports activities. The enthusiast for sports adventure should definitely visit the place. The place not only offers a mesmerizing view but also offers thrilling adventure sports.</p>
        </div>
      </div>

      {/* card section 1*/}

      <div className="container mx-auto max-w-6xl py-6 px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="flex p-4 gap-4 shadow-sm bg-white">
            <img
              src="/assets/card1.jpg"
              className="w-24 h-24 rounded-full object-cover p-1 border "
              alt="Solang"
            />
            <div className="flex flex-col">
              <div>
                <h1 className="text-lg font-serif leading-tight">Adventure Paradise </h1>
                <p className="text-sm text-gray-500">A Place with fun activites</p>
              </div>
              <p className="text-sm md:text-base text-gray-700 mt-2">
                Solang Valley is a high hill valley famous for adventurous tourism on heights in India. Get ready with all your winter sports gear because the valley will make your adrenaline rush.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="flex  p-4 gap-4 shadow-sm bg-white">
            <img
              src="/assets/card2.jpg"
              className="w-24 h-24 rounded-full object-cover p-1 border "
              alt="Solang"
            />
            <div className="flex flex-col">
              <div>
                <h1 className="text-lg font-serif leading-tight">Beautiful View</h1>
                <p className="text-sm text-gray-500">A bundle of picturesque sights</p>
              </div>
              <p className="text-sm md:text-base text-gray-700 mt-2">
                The place offers a dream view. It brings your imagination of a perfect hill point view into a reality. Solang Valley brings you close to nature’s beauty away from city hubbub.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="flex p-4 gap-4 shadow-sm bg-white">
            <img
              src="/assets/card3.jpg"
              className="w-24 h-24 rounded-full object-cover p-1 border "
              alt="Solang"
            />
            <div className="flex flex-col ">
              <div>
                <h1 className="text-lg font-serif leading-tight">Fragrant Pine Forest</h1>
                <p className="text-sm text-gray-500">Nature supportive green valley</p>
              </div>
              <p className="text-sm md:text-base text-gray-700 mt-2">
                Pines are the heart of high hill valleys. The valley is surrounded by tall fascinating pine tress and gives the mesmerizing view moving up to the Solang Valley.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* card section 2*/}
      <div className="py-6">
        <div className="bg-gray-300 py-12">
          <div className="container mx-auto max-w-6xl flex flex-col gap-8  px-4" >
            <div className="flex justify-center flex-col ">
              {/* <h1 className="text-[#1a6bb2] text-center text-[20px] font-serif ">Solang Valley- Ski Area in India</h1> */}
              <h2 className="text-black text-center text-[42px] font-serif " > Solang Valley Highlights</h2>

            </div>
            <div className="w-24 h-[1px] bg-[#1a6bb2] mx-auto"></div>
            <div className="flex justify-center flex-col text-center">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-normal ">Solang valley situated in Manali got the attention from every part of India. The place beside having perennial tourists’ activity, is also been an attraction for movies shooting, heritage mansions and rich  <Link href="https://en.wikipedia.org/wiki/Fauna" className="text-[#1a6bb2] hover:underline font-semibold transition-all" target="_blank">
            Fauna
          </Link>. Solang Valley never disappoints you with its beauty and charm to make the visit in any season. Here is a little detail to keep in mind before making a visit to nature charmer</p>
            </div>

            <div className="container mx-auto max-w-6xl py-6 px-2">

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-16 lg:gap-6">
                {/* CARD 1 */}
                <div className="relative bg-white shadow-sm p-6">

                  {/* IMAGE OVERLAP */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <div className="w-18 h-18 rounded-full border-4 border-white bg-white shadow flex items-center justify-center">
                      <MdCurrencyRupee className="text-2xl text-[#1a6bb2]" />
                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="mt-12 text-center">
                    <h1 className="text-lg font-serif font-semibold">Entry Fee</h1>
                    <p className="text-sm md:text-base text-gray-700 mt-3">
                      There is not any entry fee for a visit to Solang valley as nature is free of cost. Besides the entry, the human playful activity is charged.
                    </p>
                  </div>
                </div>


                {/* CARD 2 */}
                <div className="relative bg-white shadow-sm p-6 ">

                  {/* IMAGE OVERLAP */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <div className="w-18 h-18 rounded-full border-4 border-white bg-white shadow flex items-center justify-center">
                      <FaRegCalendarAlt className="text-2xl text-[#1a6bb2]" />
                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="mt-12 text-center">
                    <h1 className="text-lg font-serif font-semibold">Best Time to Visit</h1>
                    <p className="text-sm md:text-base text-gray-700 mt-3">
                      If you love snow or throwing snowballs at each other, Solang is worth visiting in winters between Decembers to February.
                    </p>
                  </div>

                </div>

                {/* card 3 */}
                <div className="relative bg-white shadow-sm p-6 ">

                  {/* IMAGE OVERLAP */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <div className="w-18 h-18 rounded-full border-4 border-white bg-white shadow flex items-center justify-center">
                      <CiClock2 className="text-2xl text-[#1a6bb2]" />
                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="mt-12 text-center">
                    <h1 className="text-lg font-serif font-semibold">Timing</h1>
                    <p className="text-sm md:text-base text-gray-700 mt-3">
                      Do not worry about weekdays and weekends off. Solang welcomes you, every day between 10:00 a.m. to 6:00 p.m.
                    </p>
                  </div>

                </div>

                {/* CARD  4*/}
                <div className="relative bg-white shadow-sm p-6 ">

                  {/* IMAGE OVERLAP */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <div className="w-18 h-18 rounded-full border-4 border-white bg-white shadow flex items-center justify-center">
                      <CiCloud
                        className="text-2xl text-[#1a6bb2]" />
                    </div>

                  </div>

                  {/* CONTENT */}
                  <div className="mt-12 text-center">
                    <h1 className="text-lg font-serif font-semibold">Climate</h1>

                    <p className="text-sm md:text-base text-gray-700 mt-3">
                      Valley gives you every comfort you ask for. Solang has warm and temperate climate throughout the year.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* left image and right text */}
      <div className="container mx-auto max-w-6xl grid grid-cols-1  lg:grid-cols-2 py-6 px-4 gap-8">
        {/* IMAGE */}
        <div>
          <img
            src="/assets/funsola.jpg"
            className="w-full h-90 object-cover rounded-lg"
            alt="solang valley"
          />
        </div>


        {/* CONTENT */}
        <div className="space-y-6">
          <h1 className="text-[42px] font-serif">Fun at Solang
            <div className="w-24 h-[1px] bg-[#1a6bb2] rounded"></div>
          </h1>
          <p className="text-gray-700">
            Picturesque drawing mountain ranges, lush green valley in summers, snow blanket in winters, pine tree forest surrounding, Solang Valley is a perfect dream hill destination to visit.
          </p>
          {/* LIST WITH ICONS */}
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-2">
              <CgAdd className="text-xl text-[#1a6bb2] mt-1" />
              <p>Ice skating, snowman making, to live the Hollywood movie scenes.</p>
            </div>
            <div className="flex items-start gap-2">
              <CgAdd className="text-xl text-[#1a6bb2] mt-1" />
              <p>Himalayan ropeway to view the mesmerizing beauty of Solang.</p>
            </div>
            <div className="flex items-start gap-2">
              <CgAdd className="text-xl text-[#1a6bb2] mt-1" />
              <p>Nearby villages to make you witness the old India charm.</p>
            </div>
            <div className="flex items-start gap-2">
              <CgAdd className="text-xl text-[#1a6bb2] mt-1" />
              <p>Camping in Solang Valley in summer green grass.</p>
            </div>
          </div>
        </div>
      </div>


      {/* CTA */}
      <div className="py-6">
        <div className="bg-black">
          <p className="container mx-auto max-w-6xl text-4xl text-white text-center py-12">"If adventure has a final and all-embracing motive, it is surely this: we go out because it is our nature to go out, to climb mountains, and to paddle rivers, to fly to the planets and plunge into the depths of the oceans.</p>

        </div>
      </div>

      {/* CTA section */}
      <div className="">
        <div className="bg-white pb-5" >
          <div className="container mx-auto flex flex-col gap-5 py-12" >
            <div className="flex justify-center flex-col">
              <h2 className="text-black text-center text-4xl font-serif mb-6 px-4" > Recent Blog</h2>
              <div className="w-24 h-[1px] bg-black mx-auto mb-6"></div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-4 gap-4">
             <Link href="/blog/seven-things-to-do-in-manali"> <div className="flex flex-col lg:flex-row gap-4 ">
                 <div className="lg:col-span-1 flex flex-col text-center">
                  <img
                    src="/assets/sln.jpg"
                    className="w-full h-30 object-cover rounded-md"
                    alt="blog image"
                  />
                  <Link href="/blog/seven-things-to-do-in-manali" className="text-white w-full font-semibold transition-all bg-black" target="_blank">
                    29 Apr
                  </Link>
                </div>
              <div className="flex flex-col justify-between">
                  <div className=" flex flex-col space-y-4">
                    <h1 className="text-black font-serif text-2xl hover:text-cyan-600 transition-colors">Seven Things To Do In Manali</h1>
                    <p className="text-gray-700">Manali is a great place for spending your vacation. It is a beautiful town in Himachal Pradesh and is</p>
                  </div>
                  <div>
                    <p className="text-gray-700">Comments are Closed  /  Travel  /  Read More</p>
                  </div>
                </div>
              </div></Link> 


           
               <Link href="/blog/best-places-to-visit-in-manali-solang-valley"><div className="flex flex-col lg:flex-row gap-4 ">
                  <div className="lg:col-span-1 text-center  flex flex-col">
                    <img
                      src="/assets/solaa.jpg"
                      className="w-full h-30 object-cover rounded-md"
                      alt="blog image"
                    />
                    <Link href="/blog/best-places-to-visit-in-manali-solang-valley" className="text-white w-full font-semibold transition-all bg-black" target="_blank">
                      18 AUG
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className=" flex flex-col space-y-4">
                   <h1 className="text-black font-serif text-2xl hover:text-cyan-600">Best places to visit in Manali: Solang Valley</h1>
                      <p className="text-gray-700 ">Manali always excite us whenever we hear about the place. The natural beauty and mesmerizing view </p>
                    </div>
                    <div>
                      <p className="text-gray-700">Comments are Closed  /  Travel  /  Read More</p>
                    </div>
                  </div>
                </div></Link> 
            
            </div>
          </div>
          <div className="relative text-center">
            <div className="grid grid-cols-2">
              <div className="bg-gray-300 rounded-br-2xl h-20"></div>
              <div className="bg-gray-300 rounded-bl-2xl h-20"></div>
            </div>
            <p className="absolute inset-0 flex items-center justify-center text-black font-serif sm:text-[18px] md:text-[24px]">
              There will be a lot of things waiting for you. Just Jump off the clip and fly high to view the valley sight.
            </p>
          </div>
        </div>
      </div>

    </>
  );
}
