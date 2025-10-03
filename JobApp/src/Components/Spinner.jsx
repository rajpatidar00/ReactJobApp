import React from "react";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

function Spinner({ loading }) {
  return (
    <ClipLoader
      color="#4F46E5"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
}

export default Spinner;
