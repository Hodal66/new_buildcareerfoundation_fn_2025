/* eslint-disable no-irregular-whitespace */

import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import styles from "../styles";
import MainHeading1 from "../components/Headings/MainHeading1";
import Paragraph1 from "../components/Headings/Paragraph1";
import Heading2 from "../components/Headings/Heading2";

/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
export const HowDoesGivingWorkPage = () => {
  return (
    <div>
      {/* Header starts here my brother */}
      <HeaderComponent />
      {/* Header ends here my brother ! */}

      {/* Content starts here my brother*/}
      <div className="bg-bgGray text-black font-montiseramwa">
        <div
          className={`${styles.paddingX} ${styles.paddingY} gap-4 lg:gap-8 grid grid-cols-1 lg:grid-cols-2`}
        >
          <div className="w-full h-full">
            <MainHeading1 Title={"How Does Giving to the BCF Work?"} />
            <Paragraph1 classNameProps={"py-2"} Title={"  If you are a federal employee or a retiree, you have a lot of\
              giving options. You might be wondering, why you should consider\
              giving through the Combined Federal Campaign CFC during the next\
              enrollment?"} />
           
            <div className="pb-4">
        
               <Heading2 classNameProps={"pt-6 pb-1"} Title={"Here are a few great reasons:"}/>
             
              <div className="pl-6 py-3">
                <div className="text-base italic font-normal">
                  Give through{" "}
                  <span className="font-semibold not-italic">
                    Payroll Deduction
                  </span>
                  . Spreading your gift over the year makes it automatic, easier
                  at tax time and it really adds up for your favorite causes!
                  You can also set up credit, debit and PayPal if you prefer.
                </div>
                <div className="text-base italic font-normal">
                  Give to{" "}
                  <span className="font-semibold not-italic">
                    Multiple Charities
                  </span>
                  . Make all of your charitable donations and pledge volunteer
                  hours in one place.
                </div>
                <div className="text-base italic font-normal">
                  Give for{" "}
                  <span className="font-semibold not-italic">
                    Collective Impact
                  </span>
                  . When we give together, it means bigger checks for
                   charities.
                </div>
              </div>
            </div>
            <div className="pb-4">
            
               <Heading2 Title={"Looking for even more reasons?"}/>
    
              <div className="text-base italic font-normal pl-6 py-2">
                <Paragraph1 Title={"Tax-deductible giving"} />
                <Paragraph1 Title={"Unrestricted funds for charities"} />
                <Paragraph1 Title={"Easy to renew"} />
                <Paragraph1 Title={"Long-standing federal tradition"} />
                <Paragraph1 Title={"Federal employees can even volunteer"} />
                <Paragraph1 Title={"Secure online giving platform"} />
                <Paragraph1 Title={"Thousands of vetted charities"} />
              </div>
            </div>
          
             <Paragraph1 Title={" CFC provides a safe, secure way for federal government employees,\
              retirees, military, and veterans to give back by pledging dollars\
              or volunteer hours to vetted community nonprofit organizations.\
              The convenient payroll deduction provides a steady, dependable\
              income to charities and federal regulation ensures vetted, quality\
              charities."}/>

              <Heading2 classNameProps={"pt-6 pb-1"} Title={" Why it matters"} />
              <Paragraph1 Title={"  The CFC is the largest workplace giving campaign in the world. And\
              the Build Career Foundation suppoprts and salutes the work not\
              only of the CFC and federal employees, but also the great impact\
              of the charities that receive donations."}/>
              <Paragraph1 classNameProps={"pt-2"} Title={"  We want to make that process as easy as possible, to inspire more\
              people to give more."}/>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <img
                src="/carrer.jpg"
                className="rounded-roundedBox w-full h-[500px]"
                alt=""
              />
            </div>
            <div className="flex justify-between gap-4">
              <div>
                <img
                  src="/carrer.jpg"
                  className="rounded-roundedBox w-[350px] h-[200px] "
                  alt=""
                />
              </div>
              <div>
                <img
                  src="/carrer.jpg"
                  className="rounded-roundedBox w-[350px] h-[200px] "
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content ends here my brother */}

      {/* footer section starts here */}
      <FooterComponent />
      {/* Footer ends here my brother */}
    </div>
  );
};
