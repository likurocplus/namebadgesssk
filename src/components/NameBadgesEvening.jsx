import React from "react";
import Badge from "./Badge";
import badgeImg from "./3.png";
import BadgeRight from "./BadgeRight"

// import "./NameBadge.css";
const NameBadgesEvening = ({ dataOneBadge }) => {
  // 1. split the badge data into two columns
  const dataRow1 = dataOneBadge.slice(0, 2); // First 2 badges
  const dataRow2 = dataOneBadge.slice(2, 4); // Next 2 badges
  const dataRow3 = dataOneBadge.slice(4, 6); // Next 2 badges
  const dataRow4 = dataOneBadge.slice(6, 8); // Next 2 badges
  const dataRow5 = dataOneBadge.slice(8, 10); // Next 2 badges


  if (dataRow1.length == 1) {
    dataRow1.push({
      "First Name": "",
      "Last Name": "",
      "Role": "",
    });
  }

  if (dataRow2.length == 1) {
    dataRow2.push({
      "First Name": "",
      "Last Name": "",
      "Role": "",
    });
  }

  if (dataRow3.length == 1) {
    dataRow3.push({
      "First Name": "",
      "Last Name": "",
      "Role": "",
    });
  }
  if (dataRow4.length == 1) {
    dataRow4.push({
      "First Name": "",
      "Last Name": "",
      "Role": "",
    });
  }
  if (dataRow5.length == 1) {
    dataRow5.push({
      "First Name": "",
      "Last Name": "",
      "Role": "",
    });
  }

  // 2. mapping each element in dataCol1 and dataCol2 to <Badges /> components
  const returnRow1 = dataRow1.length === 2 ? (
    <div style={{ display: "flex", width: "100%" }}>
      <Badge data={dataRow1[0]} />
      <BadgeRight data={dataRow1[1]} />
    </div>
  ) : null;
  
  const returnRow2 = dataRow2.length === 2 ? (
    <div style={{ display: "flex", width: "100%" }}>
      <Badge data={dataRow2[0]} />
      <BadgeRight data={dataRow2[1]} />
    </div>
  ) : null;
  
  const returnRow3 = dataRow3.length === 2 ? (
    <div style={{ display: "flex", width: "100%" }}>
      <Badge data={dataRow3[0]} />
      <BadgeRight data={dataRow3[1]} />
    </div>
  ) : null;
  
  const returnRow4 = dataRow4.length === 2 ? (
    <div style={{ display: "flex", width: "100%" }}>
      <Badge data={dataRow4[0]} />
      <BadgeRight data={dataRow4[1]} />
    </div>
  ) : null;
  
  const returnRow5 = dataRow5.length === 2 ? (
    <div style={{ display: "flex", width: "100%" }}>
      <Badge data={dataRow5[0]} />
      <BadgeRight data={dataRow5[1]} />
    </div>
  ) : null;
  

  return (
    <div
              // 3. setting the background image
              className="relative h-[297mm] w-[210mm]"
            >
              <img
                // src="https://i.postimg.cc/59b3QTyy/image.png"
                src={badgeImg}
                alt="Background"
                className="absolute top-0 left-0 h-full w-full object-contain z-0"
              />
              {/* 4. rendering 3 row */}
              <div className="flex flex-col h-full relative">
                {/* 4.1 row 1 with spacing for badges */}
                <div className="flex w-full absolute top-[150px]">{returnRow1}</div>
                {/* 4.2 row 2 with spacing for badges */}
                <div className="flex w-full absolute top-[340px]">{returnRow2}</div>
                {/* 4.3 row 3 with spacing for badges */}
                <div className="flex w-full absolute top-[540px]">{returnRow3}</div>
                {/* 4.3 row 4 with spacing for badges */}
                <div className="flex w-full absolute top-[730px]">{returnRow4}</div>
                {/* 4.3 row 4 with spacing for badges */}
                <div className="flex w-full absolute top-[930px]">{returnRow5}</div>
              </div>
            </div>
  );
};

export default NameBadgesEvening;
