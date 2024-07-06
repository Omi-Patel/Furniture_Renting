import { Spinner } from "@nextui-org/react";
import React from "react";
import { Helmet } from "react-helmet";

const Loader = ({size}) => {
  return (
    <div className="text-center flex items-center justify-center" >
      <Helmet>
        <title>
          Loading
        </title>
      </Helmet>
      <Spinner size={size}/>
    </div>
  );
};

export default Loader;