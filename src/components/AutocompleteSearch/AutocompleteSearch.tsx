import { ReactNode, useState } from "react";
import { TextField, Button, ListItem, ListItemText } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import "./AutocompleteSearch.css";

function AutocompleteSearch() {
  const [options] = useState<string[]>(["Option 1", "Option 2", "Option 3"]);
  const [lastOption] = useState<ReactNode>(
    <Button variant="contained">Add New Option</Button>
  );

  const handleClick = () => {
    console.log("Add New Option clicked");
  };

  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={options}
      renderInput={(params) => (
        <TextField {...params} label="Choose option" variant="outlined" />
      )}
      renderOption={(prop, option) => option}
      renderGroup={(params) => (
        <>
          {Array.isArray(params.children)
            ? params.children.map((option, index) => (
                <ListItem key={index}>
                  <ListItemText primary={option} />
                </ListItem>
              ))
            : null}
          <ListItem onClick={handleClick}>{lastOption}</ListItem>
        </>
      )}
      groupBy={(option) => "Group"}
      getOptionLabel={(option) => option}
    />
  );
}

export default AutocompleteSearch;
