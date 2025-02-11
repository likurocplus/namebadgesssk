import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import handleFile from "../feature/HandleFile";
import processImg from "../feature/Process";
import "./NameBadge.css";
const UploadButton = () => {
  // 1. state for store uploaded data from file
  const [data, setData] = useState([]);

  // 2. state to store the name of the uploaded file
  const [fileName, setFileName] = useState("Empty");

  // 3. state for store generated name badge components for preview
  const [nameBadgesComponents, setNameBadgesComponents] = useState(null);

  //6. State to track whether the checkbox is checked
  const [omitFirstRow, setOmitFirstRow] = useState(true);

  //7. State for column mappings
  const [columnMappings, setColumnMappings] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    title: "Job Title",
    company: "Company",
  });

  //log data updates
  useEffect(() => {
    console.log(data);
  }, [data]);

  //8. Feature: call setNameBadgesComponents to update list NameBadges items
  //Input: none
  //Process: call setNameBadgesComponents with parameter is processImg func to get list NameBadges items
  //Output: NameBadgesComponents be updated(list NameBadges items)
  const handlePreview = () => {
    setNameBadgesComponents(processImg(data, omitFirstRow));
  };

  //9 Handle column mapping change
  const handleMappingChange = (event) => {
    const { name, value } = event.target;
    setColumnMappings((prevMappings) => ({
      ...prevMappings,
      [name]: value,
    }));
  };

  //10. Return Update Button / Process Button / Print Button
  return (
    <div className="w-1/2 pt-9">
      {/* Update Button  */}
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              XLSX or XLS
            </p>
          </div>
          <input
            onChange={(e) => handleFile(e, setData, setFileName)}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
          {/* Show Toast  */}
          <ToastContainer />
        </label>
      </div>
      {/* show file name  */}
      <div className="pt-2">
        <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold text-center">
          {fileName}
        </p>
      </div>
      {/* Check Omit First Row  */}
      <div className="flex justify-center">
        <label className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
          <input
            type="checkbox"
            checked={omitFirstRow}
            onChange={() => setOmitFirstRow(!omitFirstRow)}
          />
          Omit First Row
        </label>
      </div>
      <span className="text-xl text-gray-500 block text-center">
        Format: First Name - Last Name - Role
        <br />
        ‼️ Role-["all-access", "day-only", "volunteer" , "evening"]
      </span>
      {/* Custom Mapping  */}
      {/* <div className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            for="firstName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Column 1
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Default: First Name"
            onChange={handleMappingChange}
          />
        </div>
      </div> */}
      {/* Preview button  */}
      <div className="flex justify-center pt-5">
        <button
          onClick={handlePreview}
          type="button"
          className="text-white bg-pink-700 hover:bg-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Preview
        </button>
        {/* Print Button  */}
        <button
          onClick={() => {
            const printContent = document.querySelector(".namebadge");
            if (printContent) {
              window.print();
            } else {
              console.warn("Không tìm thấy nội dung để in");
            }
          }}
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Print
        </button>
      </div>

      {/* show list badges  */}
      <div className="namebadge">{nameBadgesComponents}</div>
    </div>
  );
};

export default UploadButton;
