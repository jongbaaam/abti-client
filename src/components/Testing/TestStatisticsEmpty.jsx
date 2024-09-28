import TestStatisticsDataCard from "./TestStatisticsDataCard";
import { perc } from "../../utils/statisticsUtils";
import TestStatisticsEmptyChart from "./TestStatisticsEmptyChart";

export default function TestStatisticsEmpty() {
  return (
    <>
      <div className="flex w-full mb-8">
        <div className="w-1/2 h-fit flex flex-col p-2 border-l-4 border-text-color-gray-light bg-color-black-5">
          <div className={"text-lg font-semibold mb-2"}>테스트 현황</div>

          <p className="flex items-center text-text-color-gray-light text-wrap">
            통계를 계산하기 위한 데이터가 부족합니다.
          </p>
        </div>
      </div>
      <div className="w-full border rounded-md p-4 mb-4">
        <TestStatisticsEmptyChart />
      </div>
      <div className="w-full border rounded-md p-4 flex justify-evenly items-center">
        <TestStatisticsDataCard
          title="그룹 A 전환율"
          statisticsData={perc(0)}
          description="기존 안 방문자가 기대하는 작업을 수행하는 비율"
        />
        <TestStatisticsDataCard
          title="그룹 B 전환율"
          statisticsData={perc(0)}
          description="변경 안 방문자가 기대하는 작업을 수행하는 비율"
        />
        <TestStatisticsDataCard
          title="상대적 전환율"
          statisticsData={perc(0)}
          description="두 그룹의 상대적인 전환율 차이"
        />
        <TestStatisticsDataCard
          title="P-value"
          statisticsData={0.0}
          description="테스트 결과가 우연일 확률을 계산한 수치로 0.05을 기준으로 낮을 경우 테스트의 결과가 유의미함 판별"
        />
        <TestStatisticsDataCard
          title="표준 오차"
          statisticsData={0.0}
          description="수치가 0에 가까울수록 테스트 결과가 안정적임을 나타냄"
        />
      </div>
    </>
  );
}
