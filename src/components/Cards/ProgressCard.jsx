/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import styles from "../../styles";

function ProgressCard() {
  const [students, setStudents] = useState(0);
  const [mentors, setMentors] = useState(0);
  const [careers, setCarreers] = useState(0);
  const numberOfAreaRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            //start counting from 10 up to 100 when numbers are available
            const interval = setInterval(() => {
              setStudents((prevNumber) => {
                const nextNumber = prevNumber + 20;
                return nextNumber > 1000 ? prevNumber : nextNumber;
              });
              setMentors((prevNumber) => {
                const nextNumber = prevNumber + 1;
                return nextNumber > 8 ? prevNumber : nextNumber;
              });
              setCarreers((prevNumber) => {
                const nextNumber = prevNumber + 5;
                return nextNumber > 120 ? prevNumber : nextNumber;
              });
            }, 40); // this the number of seconds to move from one number to another

            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (numberOfAreaRef.current) {
      observer.observe(numberOfAreaRef.current);
    }
    return () => {
      if (numberOfAreaRef.current) {
        observer.unobserve(numberOfAreaRef.current);
      }
    };
  }, []);
  return (
    <div
      className={`${styles.paddingX} grid sm:grid-cols-2 md:grid-cols-3 py-32 justify-center items-center gap-8 lg:py-24 `}
    >
      {/*First Card Students */}

      <div className="flex flex-col gap-4 justify-center items-center h-40">
        <img
          src="/Progress/StudentOk.png"
          alt="All Students"
          className="w-32 h-40"
        />
        <div className="text-4xl h-8" ref={numberOfAreaRef}>
          <p className="lg:text-3xl text-xl font-semibold text-blackPhant ">
            {students} <span>Students</span>
          </p>
        </div>
      </div>

      {/*Second Card Mentors */}

      <div className="flex flex-col gap-4 justify-center items-center h-40">
        <img
          src="/Progress/MentorOk.png"
          alt="All Mentors"
          className="w-32 h-40"
        />
        <div className="text-4xl h-8" ref={numberOfAreaRef}>
          <p className="lg:text-3xl text-xl font-semibold text-blackPhant ">
            {mentors} <span>Mentors</span>
          </p>
        </div>
      </div>

      {/*Third Card Careers */}

      <div className="flex flex-col gap-4 justify-center items-center h-40">
        <img
          src="/Progress/CarrerOk.png"
          alt="All Carreers"
          className="w-32 h-40"
        />
        <div className="text-4xl h-8" ref={numberOfAreaRef}>
          <p className="lg:text-3xl text-xl font-semibold text-blackPhant ">
            {careers} <span>Careers</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProgressCard;
