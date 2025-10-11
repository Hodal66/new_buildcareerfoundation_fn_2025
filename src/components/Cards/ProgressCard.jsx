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
    // Responsive grid: Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols
    // Padding: Mobile: py-16, Tablet: py-20, Desktop: py-24, Large: py-32
    <div
      className={`${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        justify-center items-center
        gap-4
        sm:gap-6
        md:gap-8
        py-16
        sm:py-20
        md:py-24
        lg:py-32`}
    >
      {/*First Card Students - Responsive height and spacing */}

      <div className="flex flex-col justify-center items-center
        gap-2
        sm:gap-3
        md:gap-4
        h-32
        sm:h-36
        md:h-40">
        {/* Image with responsive size: Mobile: w-24 h-32, Tablet: w-28 h-36, Desktop: w-32 h-40 */}
        <img
          src="/Progress/StudentOk.png"
          alt="All Students"
          className="
            w-24 h-32
            sm:w-28 sm:h-36
            md:w-32 md:h-40"
        />
        {/* Text container with responsive height */}
        <div className="h-6 sm:h-7 md:h-8" ref={numberOfAreaRef}>
          {/* Count text with responsive size: Mobile: text-base, Tablet: text-lg, Desktop: text-xl, Large: text-3xl */}
          <p className="font-semibold text-blackPhant
            text-base
            sm:text-lg
            md:text-xl
            lg:text-3xl">
            {students} <span>Students</span>
          </p>
        </div>
      </div>

      {/*Second Card Mentors - Responsive height and spacing */}

      <div className="flex flex-col justify-center items-center
        gap-2
        sm:gap-3
        md:gap-4
        h-32
        sm:h-36
        md:h-40">
        {/* Image with responsive size: Mobile: w-24 h-32, Tablet: w-28 h-36, Desktop: w-32 h-40 */}
        <img
          src="/Progress/MentorOk.png"
          alt="All Mentors"
          className="
            w-24 h-32
            sm:w-28 sm:h-36
            md:w-32 md:h-40"
        />
        {/* Text container with responsive height */}
        <div className="h-6 sm:h-7 md:h-8" ref={numberOfAreaRef}>
          {/* Count text with responsive size: Mobile: text-base, Tablet: text-lg, Desktop: text-xl, Large: text-3xl */}
          <p className="font-semibold text-blackPhant
            text-base
            sm:text-lg
            md:text-xl
            lg:text-3xl">
            {mentors} <span>Mentors</span>
          </p>
        </div>
      </div>

      {/*Third Card Careers - Responsive height and spacing */}

      <div className="flex flex-col justify-center items-center
        gap-2
        sm:gap-3
        md:gap-4
        h-32
        sm:h-36
        md:h-40">
        {/* Image with responsive size: Mobile: w-24 h-32, Tablet: w-28 h-36, Desktop: w-32 h-40 */}
        <img
          src="/Progress/CarrerOk.png"
          alt="All Carreers"
          className="
            w-24 h-32
            sm:w-28 sm:h-36
            md:w-32 md:h-40"
        />
        {/* Text container with responsive height */}
        <div className="h-6 sm:h-7 md:h-8" ref={numberOfAreaRef}>
          {/* Count text with responsive size: Mobile: text-base, Tablet: text-lg, Desktop: text-xl, Large: text-3xl */}
          <p className="font-semibold text-blackPhant
            text-base
            sm:text-lg
            md:text-xl
            lg:text-3xl">
            {careers} <span>Careers</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default ProgressCard;
