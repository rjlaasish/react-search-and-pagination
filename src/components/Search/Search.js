import { TextField } from "@material-ui/core";
import React, { useState } from "react";

function Search({onChange}) {

  return (
    <div>
      <TextField
        id="standard-basic"
        label="Search"
        onChange={(e) => onChange(e)}
      />
    </div>
  );
}

export default Search;
