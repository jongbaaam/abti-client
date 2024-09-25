import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import { useTestStore } from "../../store/store";
import { TestGroupCard } from "./TestGroupCard";
import TestStatisticsChart from "./TestStatisticsChart";
import {
  getStatisticsData,
  getTestResultMessage,
  perc,
  round,
} from "../../utils/statisticsUtils";

export default function TestStatisticsModal({ isOpen, onClose }) {
  const { selectedTest } = useTestStore(state => state);
  const { title, description, specimenStatistics } = selectedTest;

  const specimenData = specimenStatistics.reduce((acc, cur) => {
    const { groupName, visitorSize, conversionsSize } = cur;

    acc[`visitor${groupName}`] = visitorSize;
    acc[`conversions${groupName}`] = conversionsSize;

    return acc;
  }, {});

  const statisticData = getStatisticsData(specimenData);
  const {
    conversionRateA,
    conversionRateB,
    relativeUpliftRate,
    standardErrorDifference,
    pValue,
    significant,
  } = statisticData;

  const groupCardList = specimenStatistics.map(group => {
    const { groupName, visitorSize, conversionsSize, _id } = group;
    return (
      <TestGroupCard
        key={_id}
        groupName={groupName}
        visitorSize={visitorSize}
        conversionsSize={conversionsSize}
      />
    );
  });

  const totalVisitor = specimenStatistics.reduce((acc, cur) => {
    return (acc += cur.visitorSize);
  }, 0);

  const testResultMessage = getTestResultMessage({
    significant,
    conversionRateA,
    conversionRateB,
    relativeUpliftRate,
  });

  return (
    <Modal
      title={title}
      hasCloseBtn={true}
      isOpen={isOpen}
      onClose={onClose}
      width="w-[1280px]"
      height="h-[720px]">
      <div className="h-full flex flex-col items-center overflow-scroll">
        <div className="w-full flex items-center">
          <div>
            <p className="border-l-4 px-2 py-1 text-text-color-gray-light font-semibold mb-4">
              {description}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between items-center mb-6">
          <div className="flex items-center">{groupCardList}</div>
          <div>
            <div className="p-2 w-40 flex flex-col justify-center items-center">
              <div className="text-lg font-semibold text-center">현재표본</div>
              <div className="text-5xl font-semibold text-text-color-gray-light">
                {totalVisitor}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full mb-8">
          <div
            className={`w-1/2 h-fit flex flex-col p-2 border-l-4 ${significant ? "border-color-blue bg-color-blue-light" : "border-color-red-70 bg-color-red-10"}`}>
            <div
              className={`text-lg font-semibold mb-2 ${significant ? "text-color-blue" : "text-color-red"}`}>
              테스트 현황
            </div>
            <p className="flex justify-around items-center text-text-color-gray-light text-wrap">
              {testResultMessage}
            </p>
          </div>
        </div>
        <div className="w-full border rounded-md p-4 mb-4">
          <TestStatisticsChart statisticData={statisticData} />
        </div>
        <div className="w-full border rounded-md p-4 flex justify-evenly items-center">
          <div className="w-1/6 flex flex-col justify-center">
            <div className="text-lg font-semibold mb-2">그룹 A 전환율</div>
            <div className="w-full bg-color-black-5 p-2 rounded text-text-color-gray-light font-semibold">
              {perc(conversionRateA)}
            </div>
          </div>
          <div className="w-1/6 flex flex-col justify-center">
            <div className="text-lg font-semibold mb-2">그룹 B 전환율</div>
            <div className="w-full bg-color-black-5 p-2 rounded text-text-color-gray-light font-semibold">
              {perc(conversionRateB)}
            </div>
          </div>
          <div className="w-1/6 flex flex-col justify-center">
            <div className="text-lg font-semibold mb-2">상대적 전환율</div>
            <div className="w-full bg-color-black-5 p-2 rounded text-text-color-gray-light font-semibold">
              {perc(relativeUpliftRate)}
            </div>
          </div>
          <div className="w-1/6 flex flex-col justify-center">
            <div className="text-lg font-semibold mb-2">P-value</div>
            <div className="w-full bg-color-black-5 p-2 rounded text-text-color-gray-light font-semibold">
              {pValue.toFixed(4)}
            </div>
          </div>
          <div className="w-1/6 flex flex-col justify-center">
            <div className="text-lg font-semibold mb-2">표준 편차</div>
            <div className="w-full bg-color-black-5 p-2 rounded text-text-color-gray-light font-semibold">
              {round(standardErrorDifference, 6)}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

TestStatisticsModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
