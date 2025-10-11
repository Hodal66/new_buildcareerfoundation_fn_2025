/* eslint-disable react/no-unescaped-entities */
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import styles from "../styles";
import Paragraph1 from "../components/Headings/Paragraph1";
import ProgressCard from "../components/Cards/ProgressCard";
import { ImpactDb } from "../databases/impactDb";
import MainHeading1 from "../components/Headings/MainHeading1";
import Heading1 from "../components/Headings/Heading1";
import { HiCheckCircle } from "react-icons/hi";

export const ImpactPage = () => {
  return (
    <div>
      {/* Header starts here my brother */}
      <HeaderComponent />
      {/* Header ends here ! */}
      <main className={``}>
      <section className={`${styles.paddingX} bg-bgGray`}>
      
        <div className={`pt-16 pb-2  grid grid-cols-1 lg:grid-cols-2 text-black`}>
          <div className="pb-8">
              <MainHeading1 Title={"Impact: What do YOU care about?"}/>
            <div className={`${styles.flexStartCol} gap-4 text-btnSize font-normal pr-4`}>
              <Paragraph1 Title={"There is saying : “Give a man a fish, and you feed him for a day; teach a man to fish and you feed him for a lifetime.” "} />
               <Paragraph1 Title={"At BCF we believe everyone can make  it from zero to a champion. We do not believe in giving someone a one time food but instead we help him to build the career through which the person makes living independently."} />
               <Paragraph1 Title={" We stand guided by an unwavering belief in the potential of a single individual to catalyze change beyond measure. While it's a reality that not every student across the globe will receive the privilege of the best mentorship and top-tier education, history has proven that one champion can ignite a fire of transformation that touches thousands of lives in a community. Inspired by this truth, we've chosen to harness our resources to sharpen and empower these potential champions."} />
               <Paragraph1 Title={" At BUILD CAREER FOUNDATION, we believe in creating lasting ripple effects. By supporting the best and brightest students, and standing by them throughout their education, we aim to inspire them to achieve greatness , and become pioneers in their respective fields As these exceptional leaders flourish, they will ignite a spark of inspiration and empowerment within their communities, setting a remarkable example that will transcend through generations to come."} />
               <Paragraph1 Title={"You change the world, one gift at a time, one dollar at a time."} />
            </div>
          </div>
          <div className="mt-2 lg:mt-32 ">
            <img
              src="/images/22.JPG"
              alt=""
              className="rounded-roundedBox object-cover w-full"
            />
          </div>
        </div>
    </section>
    <section>

      <div className={`${styles.paddingX} ${styles.paddingY} bg-bgGray`}>
     
          <div className={`${styles.flexCenterCol} gap-4 pb-8`}>

            <Heading1 Title={"What do you want to impact?"} />
          
            <p className={`${styles.flexCenterCol}`}>
          
            <Paragraph1 classNameProps={"w-3/4 text-lg"} Title={" Small acts of generosity can have immense impact. Even a single dollar today can shape a brighter future for someone in need. What change do you want to inspire?"} />

      
            </p>
          </div>
          <div className={`${styles.flexCenterCol} gap-8 sm:gap-10 md:gap-12 lg:gap-16`} >
            {ImpactDb.map((impact) => {
              return (
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 grid grid-cols-1 lg:grid-cols-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group" key={impact.id}>

                 <div className="p-6 sm:p-8 md:p-10 lg:p-12 order-2 lg:order-1">
                 <p className="text-gray-800 font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold leading-tight pb-6 sm:pb-8 md:pb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {impact.title}
                  </p>
                  <div className={`${styles.flexStartCol} gap-4 sm:gap-5 md:gap-6`}>
                  {
                    impact.paragraphs.map((paragraph, index)=>(
                      <div
                        key={paragraph.id}
                        className="flex items-start gap-3 sm:gap-4 group/item hover:translate-x-2 transition-transform duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="relative">
                            <HiCheckCircle className="text-2xl sm:text-3xl text-green-500 group-hover/item:text-green-600 group-hover/item:scale-110 transition-all duration-300 drop-shadow-md" />
                            <div className="absolute inset-0 bg-green-400 rounded-full blur-sm opacity-0 group-hover/item:opacity-50 transition-opacity duration-300"></div>
                          </div>
                        </div>
                        <p className="flex-1 font-medium font-montiseramwa leading-relaxed text-gray-700 text-sm sm:text-base md:text-lg group-hover/item:text-gray-900 transition-colors duration-300">
                          <span className="relative">
                            {paragraph.content.replace(/●\s*/, '')}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover/item:w-full transition-all duration-500"></span>
                          </span>
                        </p>
                      </div>
                    ))
                }
                </div>
                 </div>
                <div className="flex justify-end items-end order-1 lg:order-2 overflow-hidden">
                  <img
                    src={impact.image}
                    alt={impact.alt}
                    className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-full rounded-t-2xl lg:rounded-tl-none lg:rounded-e-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              );
            })}

        </div>
      </div>
    </section>
    <section className={`${styles.paddingX} bg-white`}>
      <ProgressCard />
    </section>
      </main>
     

     < FooterComponent />
    </div>
  );
};
