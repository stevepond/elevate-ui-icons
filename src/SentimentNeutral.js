import React from "react";

const SentimentNeutral = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M9 14h6v1.5H9z M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z M 15.5 8 A 1.5 1.5 0 0 0 15.5 11 A 1.5 1.5 0 0 0 15.5 8 M 8.5 8 A 1.5 1.5 0 0 1 8.5 11 A 1.5 1.5 0 0 1 8.5 8" />
  </svg>
);

SentimentNeutral.displayName = "SentimentNeutral";

SentimentNeutral.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SentimentNeutral;
