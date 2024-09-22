import PropTypes from "prop-types";

import { TEST_STATUS } from "../../constants/constants";

export default function TestStatus({ status }) {
  const { message, colorClassName } = TEST_STATUS[status];

  return (
    <div className={`px-4 py-1 border-2 rounded-3xl ${colorClassName}`}>
      {message}
    </div>
  );
}

TestStatus.propTypes = {
  status: PropTypes.string,
};
