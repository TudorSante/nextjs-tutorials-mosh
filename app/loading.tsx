import React from "react";

/* Besides page and layout files, there is another predefined-named file
called Loading - used when the content of the pages is getting ready to
be rendered. This file can be added inside the app folder. File comp 
(jsx extension). */
const Loading = () => {
  return <span className="loading loading-spinner loading-md"></span>;
};

export default Loading;
