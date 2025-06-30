import { FooterComponent } from "../../components/Common/FooterComponent";
import { HeaderComponent } from "../../components/Common/HeaderComponent";


export default function LandingPage() {
    return (
        <div>
            <HeaderComponent />


            {/* Main Content Here Please! */}
            <div className="text-8xl text-white h-[774px] pt-[70px] pb-[38px] w-full  bg-gradient-to-r from-gradColor via-purple-500 to-purple-200">
                <div className=" h-[666px] flex pt-[10px] px-[10px] w-full">
                    <div className=" w-[51.14%] h-[477px]">
                        <div className="text-thankYouSize text-thankYouColor py-2">
                        Thank YOU for being a Changemaker!
                        </div>
                        <div className="text-titleSize py-5">
                           Did you give
                        </div>
                        <div className="text-paragraSize">
                            <p>
                            Thousands of federal employees opened their hearts and gave to the 
                            CFC (Combined Federal Campaign) if you were
                             one of them, we thank you.
                            </p>
                        </div>
                        {/* <div> */}
                            <button className="w-[172px] h-[34px] bg-thankYouColor text-btnSize rounded-3xl text-black">
                                LEARN MORE
                            </button>
                            {/* <h1>hello</h1> */}
                        {/* </div> */}
                        </div>
                    <div className="bg-red-200 w-[48.66%] h-[566px] ">
                        {/* <div className=" w-[190.3px] pr-[10px] pl-[5px] bg-gray-500"></div>
            <div className=" w-[190.3px] pl-[10px] pr-[5px] bg-indigo-300"></div> */}
                    </div>
                </div>
            </div>
            <div className="text-8xl text-blue-700 h-[443px] pt-[65px] pb-[65px] bg-gradient-to-r from-red-600 to-thankYouColor">
                <div className="bg-white h-[313px] rounded-3xl">

                </div>
            </div>
            <div className="text-8xl text-blue-700 h-[493px] bg-yellow-400 pt-[65px] pb-[65px]">
                <div className="bg-blue-300 h-[363px]">

                </div>
            </div>
            <div className="text-8xl text-blue-700 h-[875px] bg-lime-600 pt-[84px] pb-[84px]">
                <div className="bg-blue-300 h-[707px]">
                </div>
            </div>
            <div className="text-8xl text-blue-700 h-[320px] bg-lime-300 pb-[55px] pt-[55px]">
                <div className="bg-blue-400 h-[210px]">

                </div>
            </div>
            <div className="text-8xl text-blue-700 h-[382px] bg-red-400 pb-[65px] pt-[65px]">
                <div className="bg-green-200 h-[252px]">

                </div>
            </div>

            <FooterComponent />
        </div>
    );
}
