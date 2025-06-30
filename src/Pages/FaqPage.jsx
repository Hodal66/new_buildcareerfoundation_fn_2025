// import { FooterComponent } from "../components/Common/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";
import styles from "../styles";
import Paragraph1 from "../components/Headings/Paragraph1";
import { useState } from "react";
import { BiCaretDown, BiCaretRight } from "react-icons/bi";
import { FaqDb } from "../databases/FaqDb";

export const FaqPage = () => {
  const [heading, setheading] = useState("");
  return (
    <div>
      <HeaderComponent />
      {/* Main Content Here Please! */}
      <div
        className={`${styles.paddingX} ${styles.paddingY} ${styles.blueGradient} text-white font-montiseramwa`}
      >
        <div>
          <Paragraph1
            classNameProps={"text-white text-xl py-8"}
            Title={
              "Here are some common questions about the Build Career Foundation:"
            }
          />
        </div>
        <section>
          <div className={`flex flex-col gap-4 w-full`}>
            {FaqDb.map((faq) => (
              <div
                className={`${styles.flexStartCol} gap-4 border p-4 rounded-lg hover:cursor-pointer bg-white text-fullBlackPhant`}
                key={faq.id}
              >
                <header
                  className={`flex gap-2 w-full hover:text-gray-400  transition-all duration-500 ${
                    heading === faq.id && "border-b-2 pb-2"
                  } `}
                  onClick={() => {
                    heading !== faq.id ? setheading(faq.id) : setheading("");
                  }}
                >
                  <div className="flex gap-2 items-center transition-all duration-500">
                    {heading === faq.id ? (
                      <span>
                        <BiCaretDown />
                      </span>
                    ) : (
                      <span>
                        <BiCaretRight />
                      </span>
                    )}{" "}
                    <p className={`w-fit `}>{faq.title}</p>{" "}
                  </div>
                </header>
                {heading === faq.id && <p>{faq.content}</p>}
              </div>
            ))}
          </div>
        </section>
      </div>
      <FooterComponent />
    </div>
  );
};
