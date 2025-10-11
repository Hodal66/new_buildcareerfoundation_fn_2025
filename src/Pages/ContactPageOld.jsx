/* eslint-disable react/no-unknown-property */

import { HeaderComponent } from "../components/HeaderComponent";
import FooterComponentOne from "../components/FooterComponentOne";
import MainHeading1 from "../components/Headings/MainHeading1";
import Paragraph1 from "../components/Headings/Paragraph1";

/* eslint-disable react/no-unescaped-entities */
export const ContactPage = () => {
  return (
    <div>
      <HeaderComponent />
      {/* Header ends here ! */}
      <div className="bg-gradient-to-r from-grad1 via-grad2 to-grad3 h-[1114px] flex justify-center">
        <div className="w-widthOfScreen text-center h-[986px] ">
          <div className="w-full my-16 bg-white h-full p-12 text-start rounded-roundedBox">
         
              <MainHeading1 Title={"Contact Us"}/>
          
            <div className="text-btnSize mb-[32px]">
             
               <Paragraph1 classNameProps={"mb-[20px]"} Title={" The Build Career Foundation does not work directly with charities\
                or individuals as such, solicitation requests will not receive a\
                reply."}/>
       
               <Paragraph1 Title={" If you are interested in learning more about the Give Back\
                Foundation, complete the form."} />
            </div>

            <div>
              <form>
                <div className="text-guidanceMessageColorOnForm text-btnSize font-montiseramwa leading-relaxed">
                  Fields marked with an <span className="text-red-600">*</span>{" "}
                  are required
                </div>
                <div className="pb-[30px]">
                  <div className="mb-6">
                    <label
                      for="name"
                      className="block mb-2 text-lg font-bold text-guidanceMessageColorOnForm"
                    >
                      Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="bg-bgInputColor border border-borderInputColor text-gray-900 text-sm block w-full p-2.5 focus:outline-none focus:border-gray-500"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="email"
                      className="block mb-2 text-lg font-bold text-guidanceMessageColorOnForm"
                    >
                      Email<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-bgInputColor border border-borderInputColor text-gray-900 focus:outline-none focus:border-gray-500 text-sm block w-full p-2.5"
                      placeholder="niyonkuru@gmail.com"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="message"
                      className="block mb-2 text-lg font-bold text-guidanceMessageColorOnForm "
                    >
                      Message<span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows="10"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-bgInputColor border border-borderInputColor focus:outline-none focus:border-gray-500"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-black hover:bg-gray-400 hover:text-gray-600 focus:outline-none font-medium text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="text-[10.4px] text-center">
              <div className="py-[28px] font-montiseramwa leading-relaxed">
                Special thanks to the Combined Federal Campaign (CFC) for data
                and resources support.
              </div>
              <div className="font-montiseramwa leading-relaxed">
                The CFC is a program of the U.S. Office of Personnel Management.
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterComponentOne />
    </div>
  );
};
