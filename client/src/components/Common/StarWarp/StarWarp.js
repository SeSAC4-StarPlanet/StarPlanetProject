import React, { useEffect } from "react";

const iframePart = () => {
  return {
    __html: '<iframe src="/" width="100%" height="100%"></iframe>'
  };
};

const StarWarp = () => {
  return <div dangerouslySetInnerHTML={iframePart} />;
};

export default StarWarp;
