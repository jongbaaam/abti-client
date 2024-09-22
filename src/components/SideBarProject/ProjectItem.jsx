import { useState } from "react";
import { Link } from "react-router-dom";

import IcoDelete from "../../assets/icon/ico_delete.svg?react";
import IcoFolder from "../../assets/icon/ico_folder.svg?react";

export default function ProjectItem() {
  const [isHover, setIsHover] = useState(true);

  return (
    <li
      className="w-full h-12 px-2 flex justify-center items-center rounded-md hover:bg-color-black-5"
      onMouseEnter={() => {
        setIsHover(false);
      }}
      onMouseLeave={() => {
        setIsHover(true);
      }}>
      <div className="w-7 h-7 p-0.5">
        <IcoFolder className="fill-text-color-gray" />
      </div>
      <div
        className="text-center overflow-hidden text-ellipsis text-nowrap grow px-1"
        onClick={() => {
          console.log("아이템 클릭");
        }}>
        <Link to={"mockTestId"}>목업 프로젝트 1</Link>
      </div>
      <button
        className={`p-0.5 rounded-lg ${isHover && "invisible"} hover:bg-color-black-10`}
        onClick={() => {}}>
        <IcoDelete className="fill-text-color-gray" />
      </button>
    </li>
  );
}
