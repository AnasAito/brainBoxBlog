import React, { useState } from "react";
import Input from "shared/components/Input";
import ReactQuill from "react-quill";
import UploadImage from "shared/components/UploadImage";
export default function View({
  formik,
  handlers,
  onCancel,
  handleAddOverviewImage,
  handleAddSidebarImage,
  loading,
  imgSidebar,
  imgOverview,
  deleteSidebarImage,
  deleteOverviewImage,
}) {
  const {
    values: { name, overview },
    errors,
    touched,
  } = formik;
  const { submit, change, blur } = handlers;
  const [showImageControlOver, setShowImageControlOver] = useState(false);
  const [showImageControlSide, setShowImageControlSide] = useState(false);
  return (
    <form autoComplete="off" onSubmit={submit}>
      <div>
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Course Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            You can edit the Course name and overview.
          </p>
        </div>
        <div className="mt-6 sm:mt-5">
          <div className="sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="first_name"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <div className="max-w-lg relative rounded-md shadow-sm sm:max-w-xs">
                <Input
                  id="name"
                  type="text"
                  name="name"
                  handleChange={change}
                  onBlur={blur}
                  inputValue={name}
                  inputState={
                    touched.name
                      ? errors.name
                        ? errors.name
                        : "success"
                      : null
                  }
                />
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Overview
            </label>
            <div className="col-span-2">
              <ReactQuill
                theme="snow"
                value={overview}
                onChange={(e) => change("overview")(e)}
                name="overview"
              />
            </div>
          </div>
          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Overview image
            </label>
            <div className="col-span-2">
              {imgOverview === "" ? (
                <UploadImage
                  handleSave={handleAddOverviewImage}
                  loading={loading}
                />
              ) : (
                <div
                  className="mt-5 mx-10 relative w-full rounded-t-sm border-2   inline-block "
                  onMouseEnter={() => setShowImageControlOver(true)}
                  onMouseLeave={() => setShowImageControlOver(false)}
                >
                  <img
                    className="bg-blue-50 bg-white object-cover h-48 w-full rounded-t-sm "
                    alt="card"
                    src={`https://res.cloudinary.com/geerd/image/upload/q_auto:eco/${imgOverview}.jpg`}
                  ></img>
                  {showImageControlOver && (
                    <div className="absolute transform-50 top-1/2 left-1/2 flex">
                      <button
                        onClick={() => deleteOverviewImage()}
                        className="inline-flex mr-1 items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-red-700 transition ease-in-out duration-150"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="mt-6 sm:mt-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
              Sidebar image
            </label>
            <div className="col-span-2">
              {imgSidebar === "" ? (
                <UploadImage
                  handleSave={handleAddSidebarImage}
                  loading={loading}
                />
              ) : (
                <div
                  className="mt-5 mx-10 relative w-full rounded-t-sm border-2   inline-block "
                  onMouseEnter={() => setShowImageControlSide(true)}
                  onMouseLeave={() => setShowImageControlSide(false)}
                >
                  <img
                    className="bg-blue-50 bg-white object-cover h-48 w-full rounded-t-sm "
                    alt="card"
                    src={`https://res.cloudinary.com/geerd/image/upload/q_auto:eco/${imgSidebar}.jpg`}
                  ></img>
                  {showImageControlSide && (
                    <div className="absolute transform-50 top-1/2 left-1/2 flex">
                      <button
                        onClick={() => deleteSidebarImage()}
                        className="inline-flex mr-1 items-center px-2.5 py-1.5 border border-transparent text-xs leading-4 font-medium rounded text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-red-700 transition ease-in-out duration-150"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-5">
        <div className="flex justify-end">
          <span className="ml-3 inline-flex rounded-md shadow-sm">
            <button
              onClick={onCancel}
              type="button"
              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Cancel
            </button>
          </span>
          <span className="ml-3 inline-flex rounded-md shadow-sm">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Save
            </button>
          </span>
        </div>
      </div>
    </form>
  );
}
