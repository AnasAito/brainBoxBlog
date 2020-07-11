import React from "react";
import AudioPlayer from "../AudioPreview";
import Input from "shared/components/Input";

const typeMapper = {
  error: {
    buttonBg: "bg-red-600",
    svgFill: "text-red-600",
    svgBg: "bg-red-100",
    svgPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    ),
  },
  success: {
    buttonBg: "bg-green-600",
    svgFill: "text-green-600",
    svgBg: "bg-green-100",
    svgPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 13l4 4L19 7"
      />
    ),
  },
};
export default function Modal({
  show,
  score,
  setScore,
  payload,
  modalTitle,
  onSubmit,
  onClose,
  buttonText,
  type,
}) {
  return (
    <>
      {show ? (
        <>
          {" "}
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div
                className="bg-white  rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <div
                      className={`mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full ${typeMapper[type].svgBg} sm:mx-0 sm:h-10 sm:w-10`}
                    >
                      <svg
                        className={`h-6 w-6  ${typeMapper[type].svgFill}`}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        {typeMapper[type].svgPath}
                      </svg>
                    </div>
                    <h3
                      className="text-lg ml-2 leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      {modalTitle}
                    </h3>
                  </div>

                  <div className="mt-2 items-center">
                    {/* <p className="text-sm leading-5 text-gray-500">{modalText}</p> */}
                    <AudioPlayer src={payload} />
                    {/* <audio controls>
                        <source src={payload} />
                        Your browser does not support the audio element.
                      </audio> */}

                    <div className="relative rounded-md shadow-sm mt-1">
                      <span>Score: </span>
                      <Input
                        id="title"
                        type="number"
                        name="title"
                        placeholder="score"
                        handleChange={(e) => setScore(e.target.value)}
                        inputValue={score}
                      />
                    </div>
                  </div>
                  {/* <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:pt-5">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                    >
                      Score
                    </label>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg relative rounded-md shadow-sm sm:max-w-xs">
                        <Input
                          id="title"
                          type="number"
                          name="title"
                          handleChange={() => {}}
                          inputValue={0}
                        />
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                    <button
                      type="button"
                      className={`inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 ${typeMapper[type].buttonBg} text-base leading-6 font-medium text-white shadow-sm focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5`}
                      onClick={() => {
                        onSubmit(score);
                        onClose();
                      }}
                    >
                      {buttonText}
                    </button>
                  </span>
                  <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                    <button
                      onClick={onClose}
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                      Cancel
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" opacity-50 fixed inset-0 z-40  bg-black"></div>
        </>
      ) : null}
    </>
  );
}
