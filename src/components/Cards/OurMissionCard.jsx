import { Link } from "react-router-dom";
import { OurMission } from "../../databases/OurMission";
import styles from "../../styles";
import BtnComponentOrange from "../Buttons/BtnComponentOrange";
import Paragraph1 from "../Headings/Paragraph1";

function OurMissionCard() {
  return (
    <div
      className={`${styles.paddingX} md:mx-0 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 pb-24`}
    >
      
      {OurMission.map((mission) => (
        <div
          key={mission.id}
          className="flex flex-col justify-center items-center lg:grid lg:grid-cols-3 gap-8 bg-white rounded-roundedBox p-8"
        >
          <div className="lg:col-span-1 ">
            <img
              src={mission.icon}
              alt={mission.alt}
              className="object-fill lg:w-[600]"
            />
          </div>
          <div className="col-span-2">
            <div className={`${styles.flexCenterCol} md:items-start gap-4`}>
              <div className={`${styles.flexCenter} w-full font-bold text-4xl`}>
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
