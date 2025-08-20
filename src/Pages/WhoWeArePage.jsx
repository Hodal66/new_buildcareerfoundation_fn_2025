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
            <div className={`${styles.flexStartCol} gap-3`}>
              <Paragraph1
                classNameProps={"text-justify"}
                Title={
                  "At Build Career Foundation, our mission is simple: to build careers. We support bright students from disadvantaged backgrounds by providing mentorship and financial assistance—helping them unlock their full potential and become the next generation of changemakers for Rwanda and the world."
                }
              />

              <Paragraph1
                classNameProps={"text-justify"}
                Title={
                  "   In Rwanda today, 90% of ordinary level students lack career guidance, leaving them unaware of how their education choices shape their futures. Alarmingly, 97% of employees in top organizations like Zipline, KIVU Watts, and RSB say they were never guided during high school—often leading to misaligned careers and low job satisfaction. "
                }
              />

              <Paragraph1
                classNameProps={"text-justify"}
                Title={
                  "The problem goes deeper: 13.5% of high school students drop out, mainly due to financial struggles. Shockingly, 90% of these dropouts are bright, high-potential learners from underprivileged backgrounds."
                }
              />
            </div>
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
          <section role="Advasory Team">
            <div>
              <Heading1
                Title={"Advasory Team"}
                classNameProps={`${styles.flexCenter} font-extrabold`}
              />

              <div
                className={`flex flex-col py-4 justify-center items-center md:flex-row gap-4 md:gap-8`}
              >
                {boardOfDirectorsAdvisors_1.map((team) => (
                  <div key={team.id} className="group rounded-md">
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src={team.image}
                        alt={team.name}
                        className="h-[300px] w-full rounded-md"
                      />
                      <div>
                        <p className="font-semibold">{team.name}</p>
                        <p>{team.position}</p>
                      </div>
                      <div
                        className={`h-full  w-full absolute  bg-slate-900/20 ${styles.flexCenterCol}  group-hover:gap-12 -bottom-48 group-hover:-bottom-0 transition-all duration-500  group-hover:bg-slate-900/60 opacity-0 group-hover:opacity-100 
                      rounded-ee-full rounded-tl-full group-hover:rounded-none`}
                      >
                        <div
                          className={`text-bgGray ${styles.flexCenterCol} pt-2`}
                        >
                          <h2 className="font-extrabold">{team.name}</h2>
                          <p className="font-semibold mb-2">{team.position}</p>
                          <p className="px-2.5">{team.content}</p>
                        </div>
                        <div>
                          <ul
                            className={`${styles.flexCenter} mb-2 text-bgGray`}
                          >
                            <a
                              href={team.linkedInLink}
                              target="_blank"
                              rel="noreferrer"
                              className="text-4xl hover:text-blue-500 hover:scale-125 hover:transition-all duration-500 "
                            >
                              <li>
                                <CiLinkedin />
                              </li>
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
               <div
                className={`flex flex-col py-4 justify-center items-center md:flex-row gap-4 md:gap-8`}
              >
                {boardOfDirectorsAdvisors_2.map((team) => (
                  <div key={team.id} className="group rounded-md">
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src={team.image}
                        alt={team.name}
                        className="h-[300px] w-full rounded-md"
                      />
                      <div>
                        <p className="font-semibold">{team.name}</p>
                        <p>{team.position}</p>
                      </div>
                      <div
                        className={`h-full  w-full absolute  bg-slate-900/20 ${styles.flexCenterCol}  group-hover:gap-12 -bottom-48 group-hover:-bottom-0 transition-all duration-500  group-hover:bg-slate-900/60 opacity-0 group-hover:opacity-100 
                      rounded-ee-full rounded-tl-full group-hover:rounded-none`}
                      >
                        <div
                          className={`text-bgGray ${styles.flexCenterCol} pt-2`}
                        >
                          <h2 className="font-extrabold">{team.name}</h2>
                          <p className="font-semibold mb-2">{team.position}</p>
                          <p className="px-2.5">{team.content}</p>
                        </div>
                        <div>
                          <ul
                            className={`${styles.flexCenter} mb-2 text-bgGray`}
                          >
                            <a
                              href={team.linkedInLink}
                              target="_blank"
                              rel="noreferrer"
                              className="text-4xl hover:text-blue-500 hover:scale-125 hover:transition-all duration-500 "
                            >
                              <li>
                                <CiLinkedin />
                              </li>
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section role="team director ">
            <div>
              <Heading1
                Title={"Management Team"}
                classNameProps={`${styles.flexCenter} font-extrabold`}
              />

              <div
                className={`flex flex-col py-4 justify-center items-center md:flex-row s gap-4 md:gap-8`}
              >
                {boardOfDirectorsTeam_1.map((team) => (
                  <div key={team.id} className="group rounded-md">
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src={team.image}
                        alt={team.name}
                        className="h-[300px] w-full rounded-md"
                      />
                      <div>
                        <p className="font-semibold">{team.name}</p>
                        <p>{team.position}</p>
                      </div>
                      <div
                        className={`h-full  w-full absolute  bg-slate-900/20 ${styles.flexCenterCol}  group-hover:gap-12 -bottom-48 group-hover:-bottom-0 transition-all duration-500  group-hover:bg-slate-900/60 opacity-0 group-hover:opacity-100 
                      rounded-ee-full rounded-tl-full group-hover:rounded-none`}
                      >
                        <div
                          className={`text-bgGray ${styles.flexCenterCol} pt-2`}
                        >
                          <h2 className="font-extrabold">{team.name}</h2>
                          <p className="font-semibold mb-2">{team.position}</p>
                          <p className="px-2.5">{team.content}</p>
                        </div>
                        <div>
                          <ul
                            className={`${styles.flexCenter} mb-2 text-bgGray`}
                          >
                            <a
                              href={team.linkedInLink}
                              target="_blank"
                              rel="noreferrer"
                              className="text-4xl hover:text-blue-500 hover:scale-125 hover:transition-all duration-500 "
                            >
                              <li>
                                <CiLinkedin />
                              </li>
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>


              <div
                className={`flex flex-col py-4 justify-center items-center md:flex-row gap-4 md:gap-8`}
              >
                {boardOfDirectorsTeam_2.map((team) => (
                  <div key={team.id} className="group rounded-md">
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src={team.image}
                        alt={team.name}
                        className="h-[300px] w-full rounded-md"
                      />
                      <div>
                        <p className="font-semibold">{team.name}</p>
                        <p>{team.position}</p>
                      </div>
                      <div
                        className={`h-full  w-full absolute  bg-slate-900/20 ${styles.flexCenterCol}  group-hover:gap-12 -bottom-48 group-hover:-bottom-0 transition-all duration-500  group-hover:bg-slate-900/60 opacity-0 group-hover:opacity-100 
                      rounded-ee-full rounded-tl-full group-hover:rounded-none`}
                      >
                        <div
                          className={`text-bgGray ${styles.flexCenterCol} pt-2`}
                        >
                          <h2 className="font-extrabold">{team.name}</h2>
                          <p className="font-semibold mb-2">{team.position}</p>
                          <p className="px-2.5">{team.content}</p>
                        </div>
                        <div>
                          <ul
                            className={`${styles.flexCenter} mb-2 text-bgGray`}
                          >
                            <a
                              href={team.linkedInLink}
                              target="_blank"
                              rel="noreferrer"
                              className="text-4xl hover:text-blue-500 hover:scale-125 hover:transition-all duration-500 "
                            >
                              <li>
                                <CiLinkedin />
                              </li>
                            </a>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
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
              <div className={`${styles.flexStartCol} gap-4`}>
                <div className="font-medium mx-auto text-bgGray font-montiseramwa leading-relaxed">
                  <Heading2
                    Title={
                      "Empowering Dreams: The Journey of Build Career Foundation (BCF)"
                    }
                    classNameProps={"py-2"}
                  />
                  <div className="mx-auto">
                    <p className="text-justify">
                    When they reached their Ordinary Level (Senior 3), life became even harder. Their teachers, though caring, could not give them the right advice about career choices. Shumbusha loved math and science, but he did not know how these passions could turn into a career. Shella had the same struggle. The future felt uncertain and heavy.
                    </p>
                  </div>
                </div>
                <div className="font-medium  text-bgGray font-montiseramwa leading-relaxed mx-auto">
                  <p className="text-justify">
                    With determination, they turned to the little resource they could find: a friend’s smartphone. A single Google search opened their eyes if they studied math and physics, they could pursue engineering. That small discovery became a turning point in their lives.
                  </p>
                </div>
                <div className="font-medium text-bgGray font-montiseramwa leading-relaxed mx-auto">
                  <p className="text-justify">
                    But convincing their teachers and families was not easy. Most people advised them to choose the safer path of becoming teachers, which promised quicker jobs. Yet, both refused to give up their bigger dreams.
                  </p>
                </div>
                <div className="font-medium text-bgGray font-montiseramwa leading-relaxed mx-auto">
                  <p className="text-justify">
                   Thanks to support from Imbuto Foundation, which provided financial help to brilliant but underprivileged students, Shumbusha and Shella managed to continue their studies in math and physics. They worked hard, passed, and later realized something life-changing: there were so many students like them talented, but lost because of lack of guidance and support.
                  </p>
                </div>
                <div className="mx-auto font-medium text-bgGray font-montiseramwa leading-relaxed">
                  <p className="text-justify">
                    From that realization, a dream was born. In 2022, they founded the Build Career Foundation (BCF) with one mission: to guide, mentor, and support students so that no young person would ever feel as lost as they once did.
                  </p>
                </div>
                <div className="font-medium mx-auto text-bgGray font-montiseramwa leading-relaxed">
                  <p className="text-justify">
                  Today, BCF is empowering secondary school students across Rwanda by providing:
                  </p>
                </div>
                <div className="font-medium mx-auto text-bgGray font-montiseramwa leading-relaxed">
                  <p className="text-justify">
               1. Mentorship to help them understand their talents and career paths.

2. Financial support such as school fees, materials, and workshops.

3. Digital literacy and life skills training to prepare them for modern careers.

4. Safe spaces where they learn values, confidence, and how to overcome challenges like abuse or peer pressure.
                  </p>
                </div>
                <div className="font-medium mx-auto text-bgGray font-montiseramwa leading-relaxed">
                  <p className="text-justify">
                 BCF believes that every dream matters and that Rwanda’s future will shine brighter if every student has the chance to unlock their potential. With your support, we are not just educating students, we are building careers, transforming families, and shaping leaders who will change Rwanda and the world.
                  </p>
                </div>
                <p className="text-justify"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  );
};
