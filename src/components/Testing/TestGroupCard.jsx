import PropTypes from "prop-types";

export function TestGroupCard({ groupName, visitorSize, conversionsSize }) {
  return (
    <div className="min-w-52 h-fit flex flex-col justify-center p-2 border rounded-md mr-2">
      <div className="text-lg font-semibold mb-2">{`그룹 ${groupName}`}</div>
      <div className="flex justify-around items-center">
        <div className="mr-3">
          <div className="font-semibold text-center text-text-color-gray-light text-sm">
            방문자
          </div>
          <div className="text-2xl">{visitorSize}</div>
        </div>
        <div>
          <div className="font-semibold text-center text-text-color-gray-light text-sm">
            전환
          </div>
          <div className="text-2xl">{conversionsSize}</div>
        </div>
      </div>
    </div>
  );
}

TestGroupCard.propTypes = {
  groupName: PropTypes.string,
  visitorSize: PropTypes.number,
  conversionsSize: PropTypes.number,
};
