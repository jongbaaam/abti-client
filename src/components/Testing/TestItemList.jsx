import PropTypes from "prop-types";

import TestItem from "./TestItem";

export default function TestItemList({ tests, onClick }) {
  const testListByProjectId = tests.map(test => {
    return <TestItem key={test._id} data={test} onClick={onClick} />;
  });

  return (
    <ul className="w-full h-full overflow-scroll">{testListByProjectId}</ul>
  );
}

TestItemList.propTypes = {
  tests: PropTypes.array,
  onClick: PropTypes.func,
};
