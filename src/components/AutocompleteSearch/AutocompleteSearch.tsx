import React, { useState } from "react";
import { TextField } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import "./AutocompleteSearch.css";

interface Props {
  options: string[];
}

function AutocompleteSearch({ options }: Props) {
  const [inputValue, setInputValue] = useState("");

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          variant="outlined"
          value={inputValue}
          onChange={(event: React.ChangeEvent<any>) =>
            setInputValue(event.target.value)
          }
          InputProps={{ ...params.InputProps, type: "search" }}
        />
      )}
    />
  );
}

export default AutocompleteSearch;
