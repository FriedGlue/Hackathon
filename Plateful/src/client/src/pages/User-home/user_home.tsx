import RadialGraph from "../../components/graph"; // Assuming correct file path
import { GiKnifeFork } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";

const UserHome = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-[#EBDAC5] font-sans">
            <div className="bg-[#A08B70] w-6/12 rounded-lg lg:w-4/12 flex p-8 shadow-lg ml-14">
                <div className="flex flex-col"> 
                    <h1 className="text-2xl font-bold mb-4">Calories</h1>
                    <RadialGraph />
                </div>
                <div className="flex flex-col items-center justify-center ml-8">
                    <div className="flex flex-row mt-4"> {/* Added margin-top */}
                        <GiKnifeFork className="h-50 w-50" />
                        <div className="text-2xl font-bold mb-4 ml-2">
                            1500 consumed
                        </div>
                    </div>
                    <div className="flex flex-row mt-4"> {/* Added margin-top */}
                        <TbTargetArrow className="h-50 w-50" />
                        <div className="text-2xl font-bold mb-4 ml-2 whitespace-pre-wrap">
                            2250 goal
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col ml-8 mr-8 mt-8 md:mt-0">
                <div className="flex flex-row space-x-5">
                    <div className="bg-[#A08B70] text-2xl font-bold px-8 py-4 rounded-2xl shadow-lg">
                        Meal Swipes: 127
                    </div>
                    <div className="bg-[#A08B70] text-2xl font-bold px-6 py-4 rounded-2xl shadow-lg">
                        Dining Dollars: $87.82
                    </div>
                </div>
                <button className="bg-stone-200 hover:bg-gray-500 border border-black rounded-full mt-8 py-3 text-3xl shadow-lg bold-semibold">
                    Schedule with a Nutritionist
                </button>
                <button className="bg-[#A63B3B] hover:bg-red-700 border border-black rounded-full mt-3 py-3 text-3xl shadow-lg bold-bold w-48">
                    <a href='/Restaurants'>Let's Eat!</a>
                </button>
            </div>
        </div>
    );
};

export default UserHome;
