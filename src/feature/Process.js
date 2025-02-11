import filterData from "./FilterData"
import processData from "./ProcessBadges"
// Feature: is func create list badges and return for Upload display
// Input: The function takes in an array data (data from Upload).
// Process: It divides the data array into chunks of 6 elements each, creating a new component (NameBadges) for each chunk.
// Output: return an array of NameBadges components, each contain 6 items from the data array.
const processImg = (data, omitFirstRow) => {
  // 1. initialize index to keep current position in the data array


  //1a. check omit first row if true then set index = 1
  // if (omitFirstRow === true) {
  //   index = 1;
  // }

  // 2. initialize an empty array to contain NameBadges components
  const badgesComponents = [];

  // 3. get filter data
  let dayonly = filterData(data,"day-only");
  let volunteer = filterData(data,"volunteer");
  let allaccess = filterData(data,"all-access");
  let evening = filterData(data,"evening");

  // 3. loop to create chunks of 8 elements each from the data array
  processData(dayonly, badgesComponents);
  processData(volunteer, badgesComponents);
  processData(allaccess, badgesComponents);
  processData(evening, badgesComponents);

  // 4. return NameBadges components
  return badgesComponents;
};

export default processImg;
