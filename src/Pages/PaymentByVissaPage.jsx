import { Link } from "react-router-dom";
import styles from "../styles";

function PaymentByVissaPage() {
  return (
    <div className={`${styles.flexCenter} p-4 md:p-8 bg-bgGray`}>
      <form
        action=""
        className="flex flex-col gap-4 border p-4 md:p-8 lg:p-16 bg-slate-50 "
      >
        <div className={`${styles.flexCenter}`}>
          <img src="/Bcf_logo.png" alt="Bcf_logo.png" className="w-32" />
        </div>
        <div>
          <div>
            <div className="flex justify-between py-4">
              <h4 className="font-bold ">Donate with</h4>
              <img src="/visaImage.png" alt="visaImage.png" className="w-12" />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="creditCardNumber"
                  className="font-bold text-black"
                >
                  Credit Card number
                </label>
                <input
                  type="text"
                  name="creditCardNumber"
                  id=""
                  placeholder="000 000 000 000"
                  className="bg-gray-100 border-gray-300 rounded-md"
                />
              </div>
              <div className=" md:flex gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="dateYear" className="font-bold text-black">
                    Date/year (on the card)
                  </label>
                  <input
                    type="text"
                    name="dateYear"
                    id=""
                    placeholder="MM / YY"
                    className="bg-gray-100 border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="cardValidationCode"
                    className="font-bold text-black"
                  >
                    Card Validation Code
                  </label>
                  <input
                    type="text"
                    name="cardValidationCode"
                    id=""
                    placeholder="CSV"
                    className="bg-gray-100 border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="cardFullNames" className="font-bold text-black">
                  Card Full Names
                </label>
                <input
                  type="text"
                  name="cardFullNames"
                  id=""
                  placeholder="Names on the card"
                  className="bg-gray-100 border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="howMuchToDonate"
                  className="font-bold text-black"
                >
                  How Much do you want to donate?
                </label>
                <input
                  type="text"
                  name="howMuchToDonate"
                  id=""
                  placeholder="Donate Amount"
                  className="bg-gray-100 border-gray-300 rounded-md"
                />
              </div>
              <div>
                <Link to={"/"}>
                  <button
                    className={`w-full border py-2 ${styles.blueGradient} text-white border-gray-300 rounded-md`}
                  >
                    Send your Donation
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PaymentByVissaPage;
