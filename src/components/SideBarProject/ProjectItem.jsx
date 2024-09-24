import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import IcoDelete from "../../assets/icon/ico_delete.svg?react";
import IcoFolder from "../../assets/icon/ico_folder.svg?react";
import { useSelectedProjectStore } from "../../store/store";

export default function ProjectItem({ data, isActive }) {
  const [isHover, setIsHover] = useState(true);
  const { setSelectedProject } = useSelectedProjectStore(state => state);

  const navigate = useNavigate();

  function handleProjectClick() {
    setSelectedProject(data._id);
    navigate(`${data._id}`);
  }

  return (
    <li
      className={`w-full h-12 px-2 flex justify-center items-center rounded-md hover:bg-color-blue-light ${isActive && "text-color-blue"}`}
      onMouseEnter={() => {
        setIsHover(false);
      }}
      onMouseLeave={() => {
        setIsHover(true);
      }}>
      <div className="w-7 h-7 p-0.5">
        <IcoFolder
          className={`${isActive ? "fill-color-blue" : "fill-text-color-gray"}`}
        />
      </div>
      <div
        className="text-center overflow-hidden text-ellipsis text-nowrap grow px-1"
        onClick={handleProjectClick}>
        <Link to={"mockTestId"}>{data.projectName}</Link>
      </div>
      <button
        className={`p-0.5 rounded-lg ${isHover && "invisible"} hover:bg-color-black-10`}
        onClick={() => {}}>
        <IcoDelete className="fill-text-color-gray" />
      </button>
    </li>
  );
}

ProjectItem.propTypes = {
  data: PropTypes.object,
  isActive: PropTypes.bool,
};
