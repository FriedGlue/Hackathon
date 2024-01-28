import logo from '../../platefulLogo.png';

function LandingPage() {
  return (
    <div className='flex flex-col h-screen justify-center items-center bg-[#EBDAC5]'>
      <img src={logo} alt="Logo" className="w-80 mb-2 lg:w-96" />
      <h2 className='font-sans text-2xl mt-4'>Bring Balance To Your Plate</h2>
      <div className='flex flex-col lg:flex-row justify-center items-center mt-10 space-y-3 lg:space-y-0 lg:space-x-4'>
        <button className='bg-[#A63B3B] text-2xl border border-black hover:bg-red-700 text-stone-200 mb-3 md:mb-0 font-semibold py-2 px-14 rounded-full shadow-lg'>
          <a href='/user-home'>Guest User</a>
        </button>
        <button className='bg-[#F2E9E4] text-2xl border border-black hover:bg-gray-300 text-black font-semibold mb-3 py-2 px-20 rounded-full shadow-lg'>
          <a href='/signin'>Sign In</a>
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
