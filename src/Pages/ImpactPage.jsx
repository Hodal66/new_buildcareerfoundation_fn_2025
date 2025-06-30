/* eslint-disable react/no-unescaped-entities */
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import styles from "../styles";
import Paragraph1 from "../components/Headings/Paragraph1";
import ProgressCard from "../components/Cards/ProgressCard";
import { ImpactDb } from "../databases/impactDb";
import MainHeading1 from "../components/Headings/MainHeading1";
import Heading1 from "../components/Headings/Heading1";

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
          <div className="">
            <img
              src="/carrer.jpg"
              alt=""
              className="rounded-roundedBox object-cover max-h-[400px] w-full"
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
          <div className={`${styles.flexCenterCol} gap-8`} >
            {ImpactDb.map((impact) => {
              return (
                <div className="bg-gray-200 grid grid-cols-1 lg:grid-cols-2 rounded-roundedBox" key={impact.id}>
                
                 <div className="p-8 order-2 lg:order-1">
                 <p className="text-gray-800 font-montserrat text-4xl font-medium leading-10 pb-8 ">
                    {impact.title}
                  </p>
                  <div className={`${styles.flexStartCol} gap-4`}>
                  {
                    impact.paragraphs.map((paragraph)=>(
                      <div key={paragraph.id} >
                        <p className="flex gap-4 font-medium font-montiseramwa leading-relaxed text-blackPhant"><span>{paragraph.content}</span></p>
                      </div>
                    ))
                }        
                </div>
                 </div>
                <div className="flex justify-end items-end order-1 lg:order-2 ">
                  <img
                    src={impact.image}
                    alt={impact.alt}
                    className=" object-contain h-fit rounded-t-roundedBox lg:rounded-tl-none lg:rounded-e-roundedBox "
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
