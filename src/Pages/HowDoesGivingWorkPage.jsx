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
            <Paragraph1
              classNameProps={"py-2 text-justify italic"}
              Title={"Giving is not about how much you have, it is about how much love you carry in your heart. A giving hand is always happier than a receiving one, and that simple truth is the very soul behind the founding of Build Career Foundation. At BCF, we believe that when you give, you are not giving to an organization, you are giving to a person, to a dream, to a future. If you have a heart that wants to make a real difference, BCF is the bridge that connects your generosity to someone who truly needs it."}
            />
           
            <div className="pb-4">
              <Heading2 classNameProps={"pt-6 pb-2"} Title={"Here are few reasons:"} />

              <div className="flex flex-col gap-6 pl-4 py-3">
                <div className="text-base text-justify">
                  <span className="font-bold text-grad1 block mb-1">
                    1. Large-Scale Impact Through Mentorship
                  </span>
                  Our mentorship program exclusively focuses on Senior 3 students, those at the critical turning point of choosing their career path through level combinations. This targeted approach allows us to impact more than 300 students using a well developed curriculum of 7 courses in total every year at once, meaning your contribution to our mentorship program reaches a large number of young lives through a single, well-structured career guidance roadmap.
                </div>

                <div className="text-base text-justify">
                  <span className="font-bold text-grad1 block mb-1">
                    2. Transparent and Merit-Based Financial Support
                  </span>
                  Our student selection process for financial support is simple, clear, and strictly disciplined. Supported students must be top performers in Rwanda's national ordinary level examinations, and local village authorities must work alongside former school administrators to confirm that the high-achieving student comes from a disadvantaged family. Your contribution to school fees will always go to the most deserving and most vulnerable, no exceptions, no third rule!
                </div>

                <div className="text-base text-justify">
                  <span className="font-bold text-grad1 block mb-1">
                    3. Full Financial Accountability
                  </span>
                  Every single dollar you give will be fully accounted for and reported back to you. You will always be able to see exactly how your contribution was spent and the specific impact it made in the area you chose to support. At BCF, transparency is not optional, it is a promise and a promise is a debt that we pay with honest.
                </div>
              </div>
            </div>
            <div className="pb-6">
              <Heading2 Title={"Looking for even more reasons?"} />
              <div className="text-base text-justify pl-4 py-2 leading-relaxed">
                We didn't choose the easy path of one-time gestures, no mass meals, no shoes that wear out, no speeches that fade with time. We chose something harder and far more powerful. At BCF, we believe in the timeless principle: "Don't give a man a fish but teach him how to fish." Every resource we invest goes toward building a generation that will earn their own futures, stand on their own feet, and give back to the very communities they came from. By prioritizing students who show real potential yet face significant barriers, we ensure that your giving doesn't just help someone today rather it transforms a life, a family, and a community for generations to come.
              </div>
            </div>
          
            <Heading2 classNameProps={"pt-6 pb-2"} Title={"Why It Matters"} />
            <div className="text-base text-justify pl-4 py-2 leading-relaxed">
              It matters because we are not solving a problem for a day, we are building a generation for a lifetime. Every student we mentor, every barrier we remove, every career path we help unlock creates a ripple effect that goes far beyond the individual. A brilliant student from a disadvantaged family, given the right guidance and support, will not just build their own future, they will come back and build their community as we are giving back to our community. That is the kind of impact that multiplies itself. At BCF, we don't count the meals served or the shoes given, we count the futures built, the careers launched, and the lives permanently changed. That is why it matters!
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <img
              loading="lazy"
                src="https://res.cloudinary.com/andela-hodal/image/upload/v1772277116/Etiene_project_images/LandingPage/qxchkdvdahusafmt9lf3.jpg"
                className="rounded-roundedBox w-full h-[500px]"
                alt="Visit student"
              />
            </div>
            <div className="flex justify-between gap-4">
              <div>
                <img
                loading="lazy"
                  src="https://res.cloudinary.com/andela-hodal/image/upload/v1772275638/Etiene_project_images/LandingPage/ueu8yzxxnkzv2qo0mapo.jpg"
                  className="rounded-roundedBox w-[350px] h-[200px] "
                  alt="Visit mentor"
                />
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/andela-hodal/image/upload/v1772275609/Etiene_project_images/LandingPage/yihnwfc5gchpkqmgl32w.png"
                  className="rounded-roundedBox w-[350px] h-[200px] "
                  alt="Visit mentor"
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
