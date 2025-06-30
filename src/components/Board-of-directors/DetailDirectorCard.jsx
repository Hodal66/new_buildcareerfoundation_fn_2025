/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */


export default function DetailDirectorCard({SetOpenModal,SetGetModelContent}) {
  return (
    <>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-70"
    >
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-roundedBox shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ">
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t-roundedBox bg-red-400">
            <h3 className="text-3xl font-semibold">
             {SetGetModelContent}
            </h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl font-semibold"
              onClick={() => SetOpenModal(false)}
            >
              <span className="bg-transparent h-6 w-6 text-4xl">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative p-6 flex-auto">
            <p className="my-4 text-slate-500 text-lg leading-relaxed">
              I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception
              of themselves! They're slowed down by their perception of
              themselves. If you're taught you can’t do anything, you
              won’t do anything. I was taught I could do everything.
              I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception
              of themselves! They're slowed down by their perception of
              themselves. If you're taught you can’t do anything, you
              won’t do anything. I was taught I could do everything.
              I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception
              of themselves! They're slowed down by their perception of
              themselves. If you're taught you can’t do anything, you
              won’t do anything. I was taught I could do everything.
              I always felt like I could do anything. That’s the main
              thing people are controlled by! Thoughts- their perception
              of themselves! They're slowed down by their perception of
              themselves. If you're taught you can’t do anything, you
              won’t do anything. I was taught I could do everything.
            </p>
          </div>
          </div>
        </div>
      </div>
  </>
  );
}
