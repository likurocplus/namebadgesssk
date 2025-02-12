import React from "react";

const BadgeRight = ({ data }) => {
  let lastname = data["Last Name"]
  let firstname = data["First Name"]
  return (
    <div className="w-full">
      <p className="font-poppins font-medium text-2xl block mr-14 text-center">
        {lastname + " " + firstname}
      </p>
    </div>
  );
};

export default BadgeRight;
