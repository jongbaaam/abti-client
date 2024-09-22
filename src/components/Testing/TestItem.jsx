import { useState } from "react";

import Button from "../common/Button";
import IcoArrowR from "../../assets/icon/ico_arrow_r.svg?react";

import TestDeleteButton from "./TestDeleteButton";
import TestIdCopyButton from "./TestIdCopyButton";
import TestStatus from "./TestStatus";

export default function TestItem() {
  const [isShowButton, setIsShowButton] = useState(false);

  return (
    <li className="flex items-center border-b-2 cursor-pointer">
      <div className="flex items-center grow p-4 transition hover:bg-color-blue-light">
        <div className="flex justify-between items-center grow mr-2">
          <div>
            <div className="text-xl font-semibold mb-1">테스트명</div>
            <div className="text-xs">Created on 00.00.00</div>
          </div>
          <TestStatus status={"PENDING"} />
        </div>
        <div className="w-12 flex justify-center items-center">
          <Button
            className="p-1 hover:bg-color-black-5 rounded-lg"
            onClick={() => {
              setIsShowButton(isShowButton => !isShowButton);
            }}>
            <div className="flex justify-center items-center">
              <IcoArrowR className="fill-text-color-gray-light" />
            </div>
          </Button>
        </div>
      </div>
      <div
        className={`${isShowButton ? "flex" : "hidden"} justify-center items-center transition`}>
        <TestIdCopyButton />
        <TestDeleteButton />
      </div>
    </li>
  );
}
