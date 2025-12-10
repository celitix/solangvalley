import HeroSection from '../components/home'
import Link from 'next/link'
import { MdFlight } from "react-icons/md";
import { IoMdBus } from "react-icons/io";
import { FaTrain } from "react-icons/fa";
import { LuCarTaxiFront } from "react-icons/lu";
import { MdNavigateNext } from "react-icons/md";

const page = () => {
  return (
    <>

    <div className='pt-16'>
      <h2 className='text-4xl md:text-[42px] font-serif mt-12 text-center'>Nearby Destinations</h2>
    </div>

      {/* card section */}
      <div className='container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-12 px-4'>
        <div className=' bg-gray-100 w-full p-8 space-y-8'>
          <div className=''>
            <img
              src='/assets/river-beas.jpg'
              alt='Beas River'
              className='w-full h-40 rounded-md'
            />
          </div>
          <div className='flex flex-col text-center'>
            <h1 className='text-2xl font-serif mb-4'>Beas River</h1>
            <p className='text-sm md:text-base text-gray-500'>Beas River comes to life in Himachal Pradesh. This river is the blessing to the state and home to many of the <Link href="https://en.wikipedia.org/wiki/South_Asian_river_dolphin" className="text-[#1a6bb2] hover:underline font-semibold transition-all" target="_blank">
              Indus Dolphins
            </Link>. Beas River has its traces in Indian epic Mahabharata. The river cuts through the mountain ranges making its trail up to Punjab.</p>
          </div>
        </div>

        <div className=' bg-gray-100 w-full p-8 space-y-8'>
          <div className=''>
            <img
              src='/assets/Gulaban.jpg'
              alt='Gulba'
              className='w-full h-40 rounded-md'
            />
          </div>
          <div className='flex flex-col text-center'>
            <h1 className='text-2xl font-serif mb-4'>Gulaba</h1>
            <p className='text-sm md:text-base text-gray-500'>Gulaba offers both flavor of the old India and new IT India. A clean old village with all digitalized facility attracts tourist. The place is also a starting point of trekking. The trek takes you to Brighu Lake trekking. The place offers rich flora.</p>
          </div>
        </div>

        <div className=' bg-gray-100 w-full p-8 space-y-8'>
          <div className=''>
            <img
              src='/assets/Hadimba.jpg'
              alt='Hadimba Devi Temple'
              className='w-full h-40 rounded-md'
            />
          </div>
          <div className='flex flex-col text-center'>
            <h1 className='text-2xl font-serif mb-4'>Hadimba Devi Temple</h1>
            <p className='text-sm md:text-base text-gray-500'>A famous cave temple of Hidimba Devi having its significance since Mahabharata epic is situated in Himachal Pradesh. A 45 minutes travel through <Link href="https://en.wikipedia.org/wiki/Leh%E2%80%93Manali_Highway" className="text-[#1a6bb2] hover:underline font-semibold transition-all" target="_blank">
              Leh Manali highway
            </Link> will take you there. The temple is surrounded by lush green cedar forest at the foot of Himalayas.</p>
          </div>
        </div>

        <div className=' bg-gray-100 w-full p-8 space-y-8'>
          <div className=''>
            <img
              src='/assets/Bhrigu-Lake.jpg'
              alt='Bhrigu Lake'
              className='w-full h-40 rounded-md'
            />
          </div>
          <div className='flex flex-col text-center'>
            <h1 className='text-2xl font-serif mb-4'>Bhrigu Lake</h1>
            <p className='text-sm md:text-base text-gray-500'>Bhrigu Lake view is divine at top. The lake lies near Rohtang Pass. It holds a sacred importance. It is believed that Sage Maharishi Bhrigu used to meditate at this place. Beside situated at the elevation of 4,300 meters, the lake never fridges completely.</p>
          </div>
        </div>

        <div className=' bg-gray-100 w-full p-8 space-y-8'>
          <div className=''>
            <img
              src='/assets/van-vihar.jpg'
              alt='Van vihar National Park'
              className='w-full h-40 rounded-md'
            />
          </div>
          <div className='flex flex-col text-center'>
            <h1 className='text-2xl font-serif mb-4'>Van Vihar National Park</h1>
            <p className='text-sm md:text-base text-gray-500'>The park gives you serene view of green tall trees, unending mountain ranges, and beautiful lake to enjoy. The park can be visited in summers between 8:00 a.m. to 7:00 p.m. and in winters from 8:00 a.m. to 5:00 p.m. with Entry charges of 5 rupees per person.</p>
          </div>
        </div>

        <div className=' bg-gray-100 w-full p-8 space-y-8'>
          <div className=''>
            <img
              src='/assets/rohtang.jpg'
              alt='Rohtang Pass'
              className='w-full h-40 rounded-md'
            />
          </div>
          <div className='flex flex-col text-center'>
            <h1 className='text-2xl font-serif mb-4'>Rohtang Pass</h1>
            <p className='text-sm md:text-base text-gray-500'>Among Manali tourist place Rohtang pass is 1 hour 40 minutes’ drive away. Rohtang Pass connects kullu valley with <Link href="https://en.wikipedia.org/wiki/Spiti" className="text-[#1a6bb2] hover:underline font-semibold transition-all" target="_blank">
              spiti valley
            </Link> in Himachal Pradesh. The drive through the view brings the life of picturesque mountain to life.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className='bg-gray-400 py-12 text-center px-2'>
        <div><h1 className='text-4xl font-serif text-white mb-2'>Ways to Reach Solang Valley</h1></div>
        <div><p className='text-sm md:text-xl text-white'>Reaching to the destination brings out many ways. Choose from the listed ways to make your trip.</p></div>
      </div>

      

      <div className="container mx-auto max-w-6xl px-4 py-12 
                grid sm:grid-cols-1 md:grid-cols-3 gap-8">

  {/* LEFT SECTION */}
  <div className="space-y-6">
    {/* Item 1 */}
    <div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#1a6bb2] rounded-full flex items-center justify-center">
          <MdFlight className="text-2xl text-white" />
        </div>
        <h1 className="text-lg font-serif">By Air</h1>
      </div>

      <p className="mt-2 text-gray-700 text-sm md:text-base">
        Bhuntar town airport is nearest to Solang Valley. The airport is 63 kilometer
        from the famous Manali tourist place – Solang Valley.
      </p>
    </div>

    {/* Item 2 */}
    <div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#1a6bb2] rounded-full flex items-center justify-center">
          <IoMdBus  className="text-2xl text-white" />
        </div>
        <h1 className="text-lg font-serif ">By Bus</h1>
      </div>

      <p className="mt-2 text-gray-700 text-sm md:text-base">
        HPSRTC has its regular buses from Delhi or Chandigarh to different Manali tourist places. The bus route is a budgeted trip.
      </p>
    </div>
  </div>

  {/* CENTER IMAGE */}
  <div className="flex justify-center">
    <img
      src="/assets/way.jpg"
      alt="Solang Valley"
      className="w-full h-64 object-cover rounded-md"
    />
  </div>

  {/* RIGHT SECTION */}
  <div className="space-y-6">
    {/* Item 1 */}
    <div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#1a6bb2] rounded-full flex items-center justify-center">
          <FaTrain  className="text-2xl text-white" />
        </div>
        <h1 className="text-lg font-serif">By Train</h1>
      </div>

      <p className="mt-2 text-gray-700 text-sm md:text-base">
        To reach to Solang the nearest railway station is Joginder Nagar railway station. The station is 50 km away from Solang Valley.
      </p>
    </div>

    {/* Item 2 */}
    <div>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#1a6bb2] rounded-full flex items-center justify-center">
          <LuCarTaxiFront  className="text-2xl text-white" />
        </div>
        <h1 className="text-lg font-serif">By Taxi</h1>
      </div>

      <p className="mt-2 text-gray-700 text-sm md:text-base">
        To reach Solang Valley, booking private taxi is easiest. You can hire a private cab up to Solang and can also explore other Manali tourist places.
      </p>
    </div>
  </div>
</div>

    </>
  )
}

export default page
