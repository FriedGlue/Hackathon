import '../../output.css'
import logo from '../../platefulLogo.png'

function LandingPage() {

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <img src={logo} alt="Logo" className="w-80 mb-2 lg:w-96" />
      <h2 className='font-sans text-2xl mt-4'>Bring Balance To Your Plate</h2>
      <div className='flex flex-col lg:flex-row justify-center items-center mt-10 lg:space-x-4'> {/* Added mt-8 for margin-top */}
        <button className='bg-[#A63B3B] text-2xl border border-stone-950 hover:bg-gray-300 text-stone-200 font-semibold py-2 px-14 mb-3 lg:mb-0 rounded-full'>
          <a href='/login'>Guest User</a>
        </button>
        <button className='bg-[#F2E9E4] text-2xl border border-stone-950 hover:bg-gray-300 text-black font-semibold py-2 px-20 rounded-full'>
          <a href='/register'>Sign In</a>
        </button>
      </div>
    </div>
  )
}

export default LandingPage 
