import { useState } from "react";
import PropTypes from "prop-types";

import IcoInfo from "../../assets/icon/ico_info.svg?react";

export default function TestStatisticsDataCard({
  title,
  statisticsData,
  description,
}) {
  const [isIcoInfoHover, setIsIcoInfoHover] = useState(false);
  return (
    <div className="w-1/6 flex flex-col justify-center">
      <div className="flex items-center">
        <div className="text-lg font-semibold mb-2">{title}</div>
        <div className="relative mb-2 ml-1 flex justify-center items-center">
          <IcoInfo
            className="fill-text-color-gray-light w-4 h-4 p-0.5"
            onMouseEnter={() => {
              setIsIcoInfoHover(true);
            }}
            onMouseLeave={() => {
              setIsIcoInfoHover(false);
            }}
          />
          {isIcoInfoHover && (
            <div className="block absolute min-w-36 h-fit left-4 text-xs ml-2 px-2 py-0.5 bg-color-blue-light text-color-blue rounded-lg">
              {description}
            </div>
          )}
        </div>
      </div>
      <div className="w-full bg-color-black-5 p-2 rounded text-text-color-gray-light font-semibold">
        {statisticsData}
      </div>
    </div>
  );
}

TestStatisticsDataCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  statisticsData: PropTypes.any,
};
