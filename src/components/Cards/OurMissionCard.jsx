import { Link } from "react-router-dom";
import { OurMission } from "../../databases/OurMission";
import styles from "../../styles";
import BtnComponentOrange from "../Buttons/BtnComponentOrange";
import Paragraph1 from "../Headings/Paragraph1";

function OurMissionCard() {
  return (
    // Responsive grid container: Mobile: 1 col, Tablet: 1 col, Desktop: 2 cols
    // Padding: Mobile: pt-8 pb-12, Tablet: pt-12 pb-16, Desktop: pt-16 pb-24
    <div
      className={`${styles.paddingX} md:mx-0 grid grid-cols-1 lg:grid-cols-2
        gap-8
        sm:gap-12
        lg:gap-16
        pt-8 pb-12
        sm:pt-12 sm:pb-16
        md:pt-16 md:pb-24`}
    >

      {OurMission.map((mission) => (
        // Individual mission card with responsive layout and padding
        // Mobile: flex-col, Desktop: grid-cols-3
        <div
          key={mission.id}
          className="flex flex-col justify-center items-center
            lg:grid lg:grid-cols-3
            gap-4
            sm:gap-6
            md:gap-8
            bg-white rounded-roundedBox
            p-4
            sm:p-6
            md:p-8"
        >
          {/* Icon container */}
          <div className="lg:col-span-1 w-full flex justify-center">
            <img
              src={mission.icon}
              alt={mission.alt}
              className="object-fill
                w-24 h-24
                sm:w-32 sm:h-32
                md:w-40 md:h-40
                lg:w-[600]"
            />
          </div>
          {/* Content container */}
          <div className="col-span-2 w-full">
            <div className={`${styles.flexCenterCol} md:items-start
              gap-2
              sm:gap-3
              md:gap-4`}>
              {/* Title with responsive text size: Mobile: text-xl, Tablet: text-2xl, Desktop: text-4xl */}
              <div className={`${styles.flexCenter} w-full font-bold
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl`}>
                <p>
                  <span>{mission.buttonComp}</span>
                </p>
              </div>
              <div>
                <Paragraph1 Title={mission.content} />
              </div>
              <Link to={mission.link}>
                <BtnComponentOrange title={mission.name} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurMissionCard;
