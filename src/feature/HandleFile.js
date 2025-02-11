import * as XLSX from "xlsx/xlsx.mjs";
import { showSuccessPopup } from "./ShowSuccessPopup";
import { showErrorPopup } from "./ShowErrorPopup";

//Feature: Update file if user upload new file
//Input: 1.event be received by onChange event
//       2. setFile to update file state
//Process: use FileReader API to read as ArrayBuffer -> use XLSX library to convert ArrayBuffer to JSON
//Output: file be updated
const handleFile = async (e, setFile, setFileName) => {
  const data = await e.target.files[0];
  if (data) {
    //1. setfileName to display the screen
    setFileName(data.name);

    //2.create reader to read binary file in brownser
    const reader = new FileReader();

    //3.set reader read file as ArrayBuffer because XLSX read() method can read ArrayBuffer datatype
    reader.readAsArrayBuffer(data);

    //4. add event listener to reader to wait onload success
    reader.onload = (e) => {
      //4.1 create workbook from ArrayBuffer
      const workbook = XLSX.read(e.target.result);
      //4.2 create worksheet from workbook
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      //4.3 convert sheet to json
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      const firstRow = Object.keys(jsonData[0]);
      const arr = [firstRow];
      for (const element of jsonData) {
        arr.push(Object.values(element));
      }
      //4.4 update new file
      setFile(arr);

      //4.5 show popup success
      showSuccessPopup();
    };
  } else {
    //5. if error show popup error
    showErrorPopup();
  }
};

export default handleFile;
