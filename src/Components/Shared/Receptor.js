import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 320,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "50ch",
    },
  },
}));

export default function Receptor() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          label="Nombre"
          id="outlined-size-small"
          //   defaultValue="Nombre"
          variant="outlined"
        />
        <TextField
          label="RUT"
          id="outlined-size-normal"
          //   defaultValue="Normal"
          variant="outlined"
        />
        <TextField
          label="Size"
          id="outlined-size-normal"
          defaultValue="Normal"
          variant="outlined"
          rows="3"
        />
      </div>
    </form>
  );
}
