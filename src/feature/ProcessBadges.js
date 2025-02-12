import NameBadges from "../components/NameBadgesDayOnly";
import React from "react";
import NameBadgesVolunteer from "../components/NameBadgesVolunteer";
import NameBadgesAllAccess from "../components/NameBadgesAllAccess";
import NameBadgesDayOnly from "../components/NameBadgesDayOnly";
import NameBadgesEvening from "../components/NameBadgesEvening";
const processData = (data, badgesComponents) => {
    let index = 0;
    for (let i = 0; i < Math.ceil(data.length / 10); i++) {
        // 3.1 initialize tmparray to hold each chunk of 8 items
        const tmpArr = [];
    
        // 3.2 loop to gather 8 items, or until the end of the data array
        for (let j = 0; j < 10 && index < data.length; j++) {
          tmpArr.push({
            "First Name": data[index][0],
            "Last Name": data[index][1],
            "Role": data[index][2],
          }); // Add item to tmpArr
          index++; // move to the next item in the data array
        }
        console.log(tmpArr);
        // 3.3 create a NameBadges component and push them on badgesComponents array
        if(data[0][2]==="volunteer"){
            badgesComponents.push(
                <NameBadgesVolunteer dataOneBadge={tmpArr} />
              );
        }
        else if(data[0][2]==="day-only"){
            badgesComponents.push(
                <NameBadgesDayOnly dataOneBadge={tmpArr} />
              );
        }
        else if(data[0][2]==="evening"){
            badgesComponents.push(
                <NameBadgesEvening dataOneBadge={tmpArr} />
              );
        }
        else {
            badgesComponents.push(
                <NameBadgesAllAccess dataOneBadge={tmpArr} />
              );
        }
    }
}

export default processData;