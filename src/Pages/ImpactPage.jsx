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
          <div className={`${styles.flexCenterCol} gap-8 sm:gap-10 md:gap-12 lg:gap-16`}>
            {ImpactDb.map((impact) => {
              return (
                <div className="bg-white border border-gray-100 grid grid-cols-1 lg:grid-cols-2 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group" key={impact.id}>
                  
                  <div className="p-8 sm:p-10 md:p-12 lg:p-14 order-2 lg:order-1 flex flex-col h-full">
                    <div className="mb-6">
                      <h2 className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-2">Impact Area {impact.id}</h2>
                      <p className="text-gray-900 font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                        {impact.title.split('. ')[1] || impact.title}
                      </p>
                      <p className="text-gray-600 mt-4 text-lg font-medium leading-relaxed">
                        {impact.description}
                      </p>
                    </div>

                    <div className="space-y-8 flex-grow">
                      {/* Core Activities */}
                      <div>
                        <h3 className="text-gray-900 font-bold text-lg mb-4 flex items-center gap-2">
                          <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                          What We Do
                        </h3>
                        <div className="grid gap-3">
                          {impact.activities.map((activity, index) => (
                            <div key={index} className="flex items-start gap-3 group/item">
                              <HiCheckCircle className="text-xl text-blue-500 shrink-0 mt-1" />
                              <p className="text-gray-700 font-medium leading-relaxed">{activity}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Partner Support */}
                      <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
                        <h3 className="text-blue-900 font-bold text-lg mb-4">Where Partners Can Support:</h3>
                        <div className="grid gap-3">
                          {impact.partnerSupport.map((support, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0 mt-2.5"></div>
                              <p className="text-blue-800 font-medium text-sm sm:text-base">{support}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-10 pt-8 border-t border-gray-100">
                      <p className="italic text-gray-500 font-medium text-lg text-center relative px-8">
                        <span className="absolute left-0 top-0 text-4xl text-blue-100 font-serif leading-none">"</span>
                        {impact.quote}
                        <span className="absolute right-0 bottom-0 text-4xl text-blue-100 font-serif leading-none">"</span>
                      </p>
                    </div>
                  </div>

                  <div className="relative order-1 lg:order-2 overflow-hidden h-80 lg:h-auto min-h-[400px]">
                    <img
                      src={impact.image}
                      alt={impact.alt}
                      className="absolute inset-0 object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-l opacity-60"></div>
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
