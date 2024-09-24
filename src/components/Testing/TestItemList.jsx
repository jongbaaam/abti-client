import PropTypes from "prop-types";

import TestItem from "./TestItem";

export default function TestItemList({ tests }) {
  const testListByProjectId = tests.map(test => {
    return <TestItem key={test._id} data={test} />;
  });

  return (
    <ul className="w-full h-full overflow-scroll">{testListByProjectId}</ul>
  );
}

TestItemList.propTypes = {
  tests: PropTypes.array,
};
