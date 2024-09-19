import PropTypes from "prop-types";

export default function UserThumbnail({ photoUrl, width = "50px", className }) {
  return (
    <div className={className}>
      <img src={photoUrl} width={width} className="rounded-full" />
    </div>
  );
}

UserThumbnail.propTypes = {
  photoUrl: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
};
