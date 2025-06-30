/* eslint-disable no-irregular-whitespace */

// import { useState } from "react";
// import DirectorCard from "../components/Board-of-directors/DirectorCard";
// import DetailDirectorCard from "../components/Board-of-directors/DetailDirectorCard";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import styles from "../styles";
import { boardOfDirectors, boardOfDirectorsTeam } from "../databases/boardOfDirectors";
import MainHeading1 from "../components/Headings/MainHeading1";
import Heading3 from "../components/Headings/Heading3";
import Paragraph1 from "../components/Headings/Paragraph1";
import Heading1 from "../components/Headings/Heading1";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import { BiLogoWhatsapp } from "react-icons/bi";
import Heading2 from "../components/Headings/Heading2";
export const WhoWeArePage = () => {
  // const [openModal, SetOpenModal] = useState(false);
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
                  "At BUILD CAREER FOUNDATION, we understand that the key to a brighter future lies not only in academic excellence but also in providing the right guidance, and support to students from disadvantaged backgrounds. Many young minds exhibit incredible intelligence and determination in the classroom, yet their dreams often remain unfulfilled due to a lack of mentorship, financial resources, or both. Our foundation aims to bridge this gap and empower the brightest minds to reach their full potential, thereby creating trailblazers who will shape not only  Rwanda's future but the globe’s"
                }
              />

              <Paragraph1
                classNameProps={"text-justify"}
                Title={
                  "    Build Career Foundation is not a charity you give money to, but\
                rather an entity you give money through. "
                }
              />

              <Paragraph1
                classNameProps={"text-justify"}
                Title={
                  "In Rwanda, a pressing issue emerges as approximately 90% of ordinary level students face a significant dearth of career guidance, leaving them in the dark about the profound impact of their educational choices on their future. Equally concerning is the revelation that about 97% of employees surveyed in established organizations such as Zipline, KIVU watts,RSB and others were not informed about the implications of their educational decisions when they were in high school. "
                }
              />

              <Paragraph1
                classNameProps={"text-justify"}
                Title={
                  "This pervasive lack of career awareness leads students to make ill-informed choices, resulting in them being locked into educational paths that can have profound consequences on their future prospects. Further exacerbating this challenge is the disheartening statistic that 13.5% of high school students drop out, with a significant portion attributing their departure to the absence of financial support. Tragically, about 90% of these dropout rates are bright students from disadvantaged backgrounds who harbor dreams of achieving success. "
                }
              />

              <Paragraph1
                classNameProps={"text-justify"}
                Title={
                  "This alarming scenario not only highlights the urgent need for accessible mentorship and financial support but also underscores a broader concern of the presence of disengaged employees in professions they never aspired to be part of. When individuals find themselves in careers misaligned with their aspirations, their levels of professionalism and job satisfaction plummet, posing a detrimental risk to both private and national institutions. The ripple effect of this disengagement threatens the overall growth and sustainability of these organizations, demanding immediate attention and intervention."
                }
              />
            </div>
          </div>
          <div
            className={`ImageContainer ${styles.flexStartCol} gap-4 md:gap-8 lg:gap-16`}
          >
            <div className=" w-full">
              <img
                src="/carrer.jpg"
                className="full w-full  object-cover rounded-roundedBox"
                alt=""
              />
            </div>
            <div className="flex justify-between items-center gap-4 md:gap-8 lg:gap-16">
              <div className="rounded-roundedBox w-full">
                <img
                  src="/carrer.jpg"
                  className="full w-full  object-cover rounded-roundedBox"
                  alt=""
                />
              </div>
              <div className="rounded-roundedBox w-full">
                <img
                  src="/carrer.jpg"
                  className="full w-full object-cover rounded-roundedBox"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <section
        className={`${styles.paddingX} py-16 bg-thirdSectionBg text-white grid grid-cols-1 gap-8 lg:gap-0  lg:grid-cols-12 justify-between`}
      >
        <div
          className={`${styles.flexCenterCol} lg:${styles.flexStartCol} lg:col-span-3`}
        >
          <img
            src="/page_2_our_mission.png"
            className="object-fill text-center"
            alt=""
          />
        </div>
        <div className={`${styles.flexStartCol} lg:col-span-9 gap-4`}>
          <p className="text-[28px] font-normal font-montiseramwa text-bgGray ">
            Our Mission is to impact a community through a traiblazer
          </p>
          <p className="text-bgGray font-medium font-montiseramwa leading-relaxed">
            To empower underprivileged, talented students to achieve their
            dreams through mentorship and financial support..
          </p>
        </div>
      </section>

      <section className={`${styles.paddingX} ${styles.blueGradient} py-24 `}>
        <main
          className={`${styles.flexCenterCol} gap-16 bg-bgGray rounded-roundedBox p-8 font-medium font-montiseramwa leading-relaxed text-blackPhant`}
        >
          <section role="main director">
            <div>
              <Heading1
                classNameProps={`${styles.flexCenter} font-extrabold`}
                Title={"Board"}
              />

              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-32 gap-4 md:gap-8 justify-center items-center`}
              >
                {boardOfDirectors.map((team) => (
                  <div key={team.id} className="group rounded-md">
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src={team.image}
                        alt={team.name}
                        className="h-[300px] w-full rounded-md "
                      />
                      <div>
                      <p className="font-semibold">{team.name}</p>
                        <p>{team.position}</p>
                      </div>
                      <div
                        className={`h-full  w-full absolute  bg-slate-900/20 ${styles.flexCenterCol}  group-hover:gap-12 -bottom-48 group-hover:-bottom-0 transition-all duration-500  group-hover:bg-slate-900/60 opacity-0 group-hover:opacity-100 
                      rounded-ee-full rounded-tl-full group-hover:rounded-none`}
                      >
                        <div className={`text-bgGray ${styles.flexCenterCol}`}>
                          <h2 className="font-extrabold">{team.name}</h2>
                          <p className="font-semibold">{team.position}</p>
                          <p className="p-2.5">{team.content}</p>
                        </div>
                        <div className="-mt-4">
                          <ul
                            className={`${styles.flexCenter} gap-4 text-bgGray`}
                          >
                            <a
                              href={team.facebookLink}
                              target="_blank"
                              rel="noreferrer"
                              className="text-4xl hover:text-blue-500 hover:scale-125 hover:transition-all duration-500 "
                            >
                              <li>
                                <CiFacebook />
                              </li>
                            </a>
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
                            <a
                              href={`https://wa.me/${team.whatsAppNumber}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-4xl hover:text-blue-500 hover:scale-125 hover:transition-all duration-500 "
                            >
                              <li>
                                <BiLogoWhatsapp />
                              </li>
                            </a>
                            <a
                              href={team.instagramLink}
                              target="_blank"
                              rel="noreferrer"
                              className="text-4xl hover:text-blue-500 hover:scale-125 hover:transition-all duration-500 "
                            >
                              <li>
                                <CiInstagram />
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
                Title={"Managment Team"}
                classNameProps={`${styles.flexCenter} font-extrabold`}
              />

              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8`}
              >
                {boardOfDirectorsTeam.map((team) => (
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
                              href={team.facebookLink}
                              target="_blank"
                              rel="noreferrer"
                              className="text-4xl hover:text-blue-500 hover:scale-125 hover:transition-all duration-500 "
                            >
                              <li>
                                <CiFacebook />
                              </li>
                            </a>
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
                            <a
                              href={`https://wa.me/${team.whatsAppNumber}`}
                              target="_blank"
                              rel="noreferrer"
                              className="text-4xl hover:text-blue-500 hover:scale-125 hover:transition-all duration-500 "
                            >
                              <li>
                                <BiLogoWhatsapp />
                              </li>
                            </a>
                            <a
                              href={team.instagramLink}
                              target="_blank"
                              rel="noreferrer"
                              className="text-4xl hover:text-blue-500 hover:scale-125 hover:transition-all duration-500 "
                            >
                              <li>
                                <CiInstagram />
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
                      "Empowering Dreams: The Journey of BUILD CAREER FOUNDATION"
                    }
                    classNameProps={"py-2"}
                  />
                  <div className="mx-auto">
                    <p className="text-justify">
                      In 2011, amidst the landscape of Rwanda&apos;s Rusizi
                      district, two determined souls, Etienne Shumbusha and
                      Marie Shella Furaha, found themselves connected by a
                      shared education story that would ignite a powerful
                      vision. Raised into humble backgrounds, they navigated the
                      challenges of attending low ordinary level schools, where
                      dreams seemed distant amidst the darkness of limited
                      opportunities
                    </p>
                  </div>
                </div>
                <div className="font-medium  text-bgGray font-montiseramwa leading-relaxed mx-auto">
                  <p className="text-justify">
                    As Shumbusha and Shella approached their Ordinary Level
                    Exams, the path ahead appeared uncertain. Their village
                    teachers, while well-intentioned, lacked the expertise to
                    guide them toward their true passions. The weight of
                    uncertainty burdened them, as they yearned to unlock their
                    potential and discover their destined career paths.
                  </p>
                </div>
                <div className="font-medium text-bgGray font-montiseramwa leading-relaxed mx-auto">
                  <p className="text-justify">
                    For Shumbusha, a love for math and science courses sparked a
                    desire to create something meaningful, to harness the power
                    of mathematical equations for the greater good. Yet, the
                    road to engineering seemed veiled in obscurity, with no
                    clear direction to pursue.
                  </p>
                </div>
                <div className="font-medium text-bgGray font-montiseramwa leading-relaxed mx-auto">
                  <p className="text-justify">
                    With limited access to information, the resourceful pair
                    sought solace in a friend&apos;s smartphone and the vast
                    knowledge of the internet. A simple Google search unveiled
                    the path they sought - math and physics were the key to the
                    world of engineering.
                  </p>
                </div>
                <div className="mx-auto font-medium text-bgGray font-montiseramwa leading-relaxed">
                  <p className="text-justify">
                    Yet, their journey was far from over. Convincing their
                    teachers to embrace their dreams proved to be a formidable
                    challenge. The allure of teaching training centers, seen as
                    a guaranteed path to employment, loomed over Shumbusha and
                    Shella&apos;s aspirations. But the young minds remained
                    resolute - they knew their destinies lay beyond the confines
                    of the classroom.
                  </p>
                </div>
                <div className="font-medium mx-auto text-bgGray font-montiseramwa leading-relaxed">
                  <p className="text-justify">
                    Through perseverance and the support of the Imbuto
                    Foundation, which believed in the potential of brilliant
                    students, their dreams began to take shape. With financial
                    assistance, they embarked on their advanced level studies,
                    delving into the realms of math and physics, fueling the
                    fire of their engineering ambitions. As their journey
                    progressed, Shumbusha and Shella realized the profound
                    impact that mentorship and financial support could have on
                    the lives of countless students in similar circumstances.
                    The seed of an idea was planted a foundation that would
                    shine a light on the path of talented but underprivileged
                    students, guiding them towards success and empowerment.
                  </p>
                </div>
                <div className="font-medium mx-auto text-bgGray font-montiseramwa leading-relaxed">
                  <p className="text-justify">
                    Thus, In 2022 BUILD CAREER FOUNDATION was born, with an
                    unwavering vision to empower dreams. With personalized
                    mentorship and comprehensive financial assistance, the
                    foundation seeks to be the beacon of hope for young minds
                    striving to break free from the shackles of limited
                    opportunities. In their hearts, Shumbusha and Shella know
                    that by nurturing these bright minds, Rwanda&apos;s future
                    will be illuminated by the brilliance of its own people. The
                    foundation&apos;s impact will ripple across communities,
                    shaping a generation of exceptional leaders who will uplift
                    their nation and drive positive change all over the world.
                  </p>
                </div>
                <div className="font-medium mx-auto text-bgGray font-montiseramwa leading-relaxed">
                  <p className="text-justify">
                    BUILD CAREER FOUNDATION stands as a testament to the power
                    of dreams, the resilience of the human spirit, and the
                    profound impact of empathy and support. Together, Shumbusha,
                    Shella, and the foundation&apos;s dedicated team and
                    supporters are on a mission to build careers, transform
                    lives, and create not only Rwanda but the whole world where
                    no talent goes untapped and every dream flourishes.
                  </p>
                </div>
                <p className="text-justify"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className={`${styles.paddingX}`}>
        <div>
          <img src="/sertificates.jpg" alt="Our Certificate" />
        </div>
      </section> */}

      {/* Footer sections on many of the web pages starts here ! */}
      <FooterComponent />
    </div>
  );
};
