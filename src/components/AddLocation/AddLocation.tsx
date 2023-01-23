import React from "react";
import { TextField, Button } from "@mui/material";
import SearchableMap from "../SearchableMap/SearchableMap";

interface FormState {
  name: string;
  description: string;
}

function AddLocation() {
  const [formState, setFormState] = React.useState<FormState>({
    name: "",
    description: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("[addLocation.handleSubmit.formState]", formState);
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <br />
        <TextField
          label="Description"
          name="description"
          value={formState.description}
          onChange={handleChange}
          fullWidth
          margin="normal"
          multiline
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </form>
      <SearchableMap />
    </React.Fragment>
  );
}

export default AddLocation;
