/* eslint-disable react/prop-types */


const NumberStatus = ({imgVar, titleOfcard, numberData, isMoney}) => {
    return (
        <div className="basis-[235px] flex flex-col items-center justify-center text-center font-montiseramwa px-6">
            <div><img src={`/${imgVar}`} alt="" className="pb-4" /></div>
            {/* <div><img src="/" alt="" className="pb-4" /></div> */}
            {isMoney ? (<div className="text-normalSize"> $ {numberData}</div>): (<div className="text-normalSize">{numberData}</div>)}
            <div className="text-btnSize">{titleOfcard}</div>
        </div>
    );
};

export default NumberStatus;