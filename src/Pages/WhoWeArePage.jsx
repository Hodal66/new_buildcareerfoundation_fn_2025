/* eslint-disable no-irregular-whitespace */
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import styles from "../styles";
import { boardOfDirectorsAdvisors_1, boardOfDirectorsAdvisors_2, boardOfDirectorsTeam_1, boardOfDirectorsTeam_2 } from "../databases/boardOfDirectors";
import MainHeading1 from "../components/Headings/MainHeading1";
import Heading3 from "../components/Headings/Heading3";
import Paragraph1 from "../components/Headings/Paragraph1";
import Heading1 from "../components/Headings/Heading1";
import { CiLinkedin } from "react-icons/ci";
import Heading2 from "../components/Headings/Heading2";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, GraduationCap, Coins, Monitor, ShieldCheck } from "lucide-react";

const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
export const WhoWeArePage = () => {
  return (
    <div>
      <HeaderComponent />
      {/* Header ends here ! */}

      <main
        className={`${styles.paddingX} bg-bgGray py-12 full text-black font-montiseramwa`}
      >
        <section className="w-full grid-cols-1 grid lg:grid-cols-2 gap-8">
          <div>
            <div>
              <MainHeading1 Title={"Who We Are"} />
            </div>
            <div>
              <Heading3 Title={"Our Mission is simple: To build careers."} />
            </div>
            <AnimatedSection>
              <div className={`${styles.flexStartCol} gap-3`}>
                <Paragraph1
                  classNameProps={"text-left md:text-justify text-sm sm:text-base md:text-lg"}
                  Title={
                    "At Build Career Foundation, our mission is simple: to build careers. We support bright students from disadvantaged backgrounds by providing mentorship and financial assistance helping them unlock their full potential and become the next generation of changemakers for Rwanda and the world."
                  }
                />

                <Paragraph1
                  classNameProps={"text-left md:text-justify text-sm sm:text-base md:text-lg"}
                  Title={
                    "   In Rwanda today, 90% of ordinary level students lack career guidance, leaving them unaware of how their education choices shape their futures. Alarmingly, 97% of employees were never guided during high school, often leading to misaligned careers and low job satisfaction."
                  }
                />

                <Paragraph1
                  classNameProps={"text-left md:text-justify text-sm sm:text-base md:text-lg"}
                  Title={
                    "The problem goes deeper: 13.5% of high school students drop out, mainly due to financial struggles. Shockingly, 90% of these dropouts are bright, high-potential learners from underprivileged backgrounds."
                  }
                />
              </div>
            </AnimatedSection>
          </div>
          <div
            className={`ImageContainer ${styles.flexStartCol} gap-4 md:gap-8 lg:gap-16`}
          >
            <div className=" w-full">
              <img
                src="/images/10.jpg"
                className="full w-full  object-cover rounded-roundedBox"
                alt=""
              />
            </div>
            <div className="flex justify-between items-center gap-4 md:gap-8 lg:gap-16">
              <div className="rounded-roundedBox w-full">
                <img
                  src="/images/11.jpg"
                  className="full w-full  object-cover rounded-roundedBox"
                  alt=""
                />
              </div>
              <div className="rounded-roundedBox w-full">
                <img
                  src="/images/12.jpg"
                  className="full w-full object-cover rounded-roundedBox"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className={`${styles.paddingX} ${styles.blueGradient} py-24 `}>
        <main
          className={`${styles.flexCenterCol} gap-16 bg-bgGray rounded-roundedBox p-8 font-medium font-montiseramwa leading-relaxed text-blackPhant`}
        >
          <AnimatedSection>
            <section role="Advisory Team" className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 w-full">
              <div>
                <Heading1
                  Title={"Advisory Team"}
                  classNameProps={`${styles.flexCenter} font-extrabold mb-8 sm:mb-10 md:mb-12 lg:mb-16`}
                />

                <div
                  className={`flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-2 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10`}
                >
                  {[...boardOfDirectorsAdvisors_1, ...boardOfDirectorsAdvisors_2].map((team, index) => (
                    <motion.div 
                      key={team.id + "-" + index} 
                      whileHover={{ scale: 1.02 }}
                      className="group rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-sm sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-2.5rem)]"
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={team.image}
                          alt={team.name}
                          className="h-[320px] sm:h-[340px] md:h-[360px] lg:h-[380px] w-full object-cover rounded-xl"
                        />
                        <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-white text-center">
                          <p className="font-semibold text-base sm:text-lg md:text-xl mb-1 sm:mb-2">{team.name}</p>
                          <p className="text-sm sm:text-base text-gray-600">{team.position}</p>
                        </div>
                        <div
                          className={`h-full w-full absolute bg-slate-900/20 ${styles.flexCenterCol} group-hover:gap-8 sm:group-hover:gap-10 md:group-hover:gap-12 -bottom-full group-hover:bottom-0 transition-all duration-500 group-hover:bg-slate-900/75 opacity-0 group-hover:opacity-100 rounded-xl`}
                        >
                          <div
                            className={`text-bgGray ${styles.flexCenterCol} px-4 sm:px-6 md:px-8 lg:px-10 pt-4 sm:pt-6 md:pt-8`}
                          >
                            <h2 className="font-extrabold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-center">{team.name}</h2>
                            <p className="font-semibold mb-3 sm:mb-4 md:mb-5 text-sm sm:text-base md:text-lg text-center">{team.position}</p>
                            <p className="text-center text-xs sm:text-sm md:text-base leading-relaxed px-2 sm:px-3 md:px-4">{team.content}</p>
                          </div>
                          <div className="pb-4 sm:pb-6 md:pb-8">
                            <ul className={`${styles.flexCenter} text-bgGray`}>
                              <a
                                href={team.linkedinLink}
                                target="_blank"
                                rel="noreferrer"
                                className="text-4xl sm:text-5xl md:text-6xl hover:text-blue-400 hover:scale-110 transition-all duration-300 p-2"
                              >
                                <li>
                                  <CiLinkedin />
                                </li>
                              </a>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>

          <AnimatedSection>
            <section role="team director " className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 w-full">
              <div>
                <Heading1
                  Title={"Management Team"}
                  classNameProps={`${styles.flexCenter} font-extrabold mb-8 sm:mb-10 md:mb-12 lg:mb-16`}
                />

                {/* Combined grid layout for all 7 members: 3 per row, last one centered */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-2 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
                  {[...boardOfDirectorsTeam_1, ...boardOfDirectorsTeam_2].map((team, index, array) => (
                    <motion.div 
                      key={team.id + "-" + index} 
                      whileHover={{ scale: 1.02 }}
                      className={`group rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-sm mx-auto lg:max-w-none 
                        ${index === array.length - 1 && array.length % 3 === 1 ? "lg:col-start-2" : ""}
                        ${index === array.length - 1 && array.length % 2 === 1 ? "sm:col-span-2 lg:col-span-1 sm:flex sm:justify-center lg:block" : ""}
                      `}
                    >
                      <div className="relative overflow-hidden rounded-xl w-full">
                        <img
                          src={team.image}
                          alt={team.name}
                          className="h-[320px] sm:h-[340px] md:h-[360px] lg:h-[380px] w-full object-cover rounded-xl"
                        />
                        <div className="p-4 sm:p-5 md:p-6 lg:p-8 bg-white text-center">
                          <p className="font-semibold text-base sm:text-lg md:text-xl mb-1 sm:mb-2">{team.name}</p>
                          <p className="text-sm sm:text-base text-gray-600">{team.position}</p>
                        </div>
                        <div
                          className={`h-full w-full absolute bg-slate-900/20 ${styles.flexCenterCol} group-hover:gap-8 sm:group-hover:gap-10 md:group-hover:gap-12 -bottom-full group-hover:bottom-0 transition-all duration-500 group-hover:bg-slate-900/75 opacity-0 group-hover:opacity-100 rounded-xl`}
                        >
                          <div
                            className={`text-bgGray ${styles.flexCenterCol} px-4 sm:px-6 md:px-8 lg:px-10 pt-4 sm:pt-6 md:pt-8`}
                          >
                            <h2 className="font-extrabold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3 text-center">{team.name}</h2>
                            <p className="font-semibold mb-3 sm:mb-4 md:mb-5 text-sm sm:text-base md:text-lg text-center">{team.position}</p>
                            <p className="text-center text-xs sm:text-sm md:text-base leading-relaxed px-2 sm:px-3 md:px-4">{team.content}</p>
                          </div>
                          <div className="pb-4 sm:pb-6 md:pb-8">
                            <ul className={`${styles.flexCenter} text-bgGray`}>
                              <a
                                href={team.linkedinLink}
                                target="_blank"
                                rel="noreferrer"
                                className="text-4xl sm:text-5xl md:text-6xl hover:text-blue-400 hover:scale-110 transition-all duration-300 p-2"
                              >
                                <li>
                                  <CiLinkedin />
                                </li>
                              </a>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </AnimatedSection>
        </main>
      </section>

      <section className={`${styles.paddingX} py-16 bg-grayColor `}>
        <div
          className={`text-white bg-thirdSectionBg ${styles.paddingInside} rounded-roundedBox`}
        >
          <div className="rounded-roundedBox ">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center lg:items-start lg:justify-between pb-4">
              <div className="text-normalSize "> Our Story</div>
              <div className="">
                <img src="/logob.png" alt="" className="w-48 pr-4" />
              </div>
            </div>
            <div>
              <div className={`${styles.flexStartCol} gap-6 md:gap-8`}>
                <div className="w-full text-center md:text-left">
                  <Heading2
                    Title={"Empowering Dreams: The Journey of Build Career Foundation (BCF)"}
                    classNameProps={"py-2 text-2xl sm:text-3xl lg:text-4xl"}
                  />
                </div>
                
                <div className="flex flex-col gap-6 md:gap-8 w-full">
                  <AnimatedSection>
                    <p className="text-left md:text-justify text-sm sm:text-base md:text-lg text-bgGray leading-relaxed">
                      In 2011, in Rwanda’s Rusizi District, two young students, Etienne Shumbusha and Marie Shella Furaha, faced a struggle that many children in rural areas know too well. They came from humble families and studied in schools with very limited resources. Like many of their classmates, they dreamed of a brighter future but had no clear guidance on how to reach it.
                    </p>
                  </AnimatedSection>

                  <AnimatedSection>
                    <p className="text-left md:text-justify text-sm sm:text-base md:text-lg text-bgGray leading-relaxed">
                      When they reached their Ordinary Level (Senior 3), life became even harder. Their teachers, though caring, could not give them the right advice about career choices. Shumbusha loved math and science, but he did not know how these passions could turn into a career. Shella had the same struggle. The future felt uncertain and heavy.
                    </p>
                  </AnimatedSection>

                  <AnimatedSection>
                    <p className="text-left md:text-justify text-sm sm:text-base md:text-lg text-bgGray leading-relaxed">
                      With determination, they turned to the little resource they could find: a friend’s smartphone. A single Google search opened their eyes—if they studied math and physics, they could pursue engineering. That small discovery became a turning point in their lives.
                    </p>
                  </AnimatedSection>

                  <AnimatedSection>
                    <p className="text-left md:text-justify text-sm sm:text-base md:text-lg text-bgGray leading-relaxed">
                      But convincing their teachers and families was not easy. Most people advised them to choose the safer path of becoming teachers, which promised quicker jobs. Yet, both refused to give up their bigger dreams.
                    </p>
                  </AnimatedSection>

                  <AnimatedSection>
                    <p className="text-left md:text-justify text-sm sm:text-base md:text-lg text-bgGray leading-relaxed">
                      Thanks to the support from the Imbuto Foundation, which recognized their potential and provided the essential sponsorship to pursue their dreams, Shumbusha and Shella were able to excel in their studies in math and physics. They worked hard, succeeded, and later realized something life-changing: there were so many students like them talented, but without a clear path or the necessary support to follow their ambitions.
                    </p>
                  </AnimatedSection>

                  <AnimatedSection>
                    <p className="text-left md:text-justify text-sm sm:text-base md:text-lg text-bgGray leading-relaxed font-semibold italic">
                      From that realization, a dream was born. In 2022, they founded the Build Career Foundation (BCF) with one mission: to guide, mentor, and support students so that no young person would ever feel as lost as they once did.
                    </p>
                  </AnimatedSection>

                  <AnimatedSection>
                    <div className="bg-white/5 p-6 sm:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                      <p className="text-left md:text-center text-lg sm:text-xl text-bgGray mb-8 font-bold tracking-wide">
                        Today, BCF is empowering secondary school students across Rwanda through:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div className="flex items-start gap-4">
                          <div className="bg-white/20 p-2 rounded-lg shrink-0">
                            <GraduationCap className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-white mb-1">Professional Mentorship</p>
                            <p className="text-sm text-bgGray/80">Helping students understand their innate talents and navigate rewarding career paths.</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="bg-white/20 p-2 rounded-lg shrink-0">
                            <Coins className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-white mb-1">Financial Assistance</p>
                            <p className="text-sm text-bgGray/80">Providing support for school fees, essential materials, and educational workshops.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-white/20 p-2 rounded-lg shrink-0">
                            <Monitor className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-white mb-1">Digital Literacy</p>
                            <p className="text-sm text-bgGray/80">Equipping youth with life skills and technical training for the modern global economy.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="bg-white/20 p-2 rounded-lg shrink-0">
                            <ShieldCheck className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-white mb-1">Empowerment & Safety</p>
                            <p className="text-sm text-bgGray/80">Creating safe spaces to foster values, confidence, and resilience against social challenges.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection>
                    <p className="text-left md:text-justify text-sm sm:text-base md:text-lg text-bgGray leading-relaxed">
                      BCF believes that every dream matters and that Rwanda’s future will shine brighter if every student has the chance to unlock their potential. With your support, we are not just educating students, we are building careers, transforming families, and shaping leaders who will change Rwanda and the world.
                    </p>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
};
