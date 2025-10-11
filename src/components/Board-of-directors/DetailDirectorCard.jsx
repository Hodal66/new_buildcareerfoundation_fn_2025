/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */


export default function DetailDirectorCard({SetOpenModal,SetGetModelContent}) {
  return (
    <>
    {/* Modal overlay - full screen backdrop */}
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-70
        px-4
        sm:px-6
        md:px-8"
    >
      {/* Modal container with responsive width and margin: Mobile: w-full, Tablet: max-w-lg, Desktop: max-w-3xl */}
      <div className="relative my-4 mx-auto
        w-full max-w-sm
        sm:max-w-md sm:my-5
        md:max-w-2xl md:my-6
        lg:max-w-3xl">
        {/* Modal content card */}
        <div className="border-0 rounded-roundedBox shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/* Header with responsive padding and text: Mobile: p-3 text-xl, Tablet: p-4 text-2xl, Desktop: p-5 text-3xl */}
          <div className="flex items-start justify-between border-b border-solid border-slate-200 rounded-t-roundedBox bg-red-400
            p-3
            sm:p-4
            md:p-5">
            <h3 className="font-semibold
              text-xl
              sm:text-2xl
              md:text-3xl">
             {SetGetModelContent}
            </h3>
            {/* Close button with responsive size */}
            <button
              className="ml-auto bg-transparent border-0 text-black float-right font-semibold
                p-0.5
                sm:p-1"
              onClick={() => SetOpenModal(false)}
            >
              <span className="bg-transparent
                text-2xl
                sm:text-3xl
                md:text-4xl">
                ×
              </span>
            </button>
          </div>
          {/* Body with responsive padding and text: Mobile: p-3 text-sm, Tablet: p-4 text-base, Desktop: p-6 text-lg */}
          <div className="relative flex-auto
            p-3
            sm:p-4
            md:p-6">
            <p className="text-slate-500 leading-relaxed
              my-2 text-sm
              sm:my-3 sm:text-base
              md:my-4 md:text-lg">
              I always felt like I could do anything. That's the main
              thing people are controlled by! Thoughts- their perception
              of themselves! They're slowed down by their perception of
              themselves. If you're taught you can't do anything, you
              won't do anything. I was taught I could do everything.
              I always felt like I could do anything. That's the main
              thing people are controlled by! Thoughts- their perception
              of themselves! They're slowed down by their perception of
              themselves. If you're taught you can't do anything, you
              won't do anything. I was taught I could do everything.
              I always felt like I could do anything. That's the main
              thing people are controlled by! Thoughts- their perception
              of themselves! They're slowed down by their perception of
              themselves. If you're taught you can't do anything, you
              won't do anything. I was taught I could do everything.
              I always felt like I could do anything. That's the main
              thing people are controlled by! Thoughts- their perception
              of themselves! They're slowed down by their perception of
              themselves. If you're taught you can't do anything, you
              won't do anything. I was taught I could do everything.
            </p>
          </div>
          </div>
        </div>
      </div>
  </>
  );
}
