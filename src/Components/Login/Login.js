import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import logo from "../../assets/ic_launcher.png";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "red",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    border: 2,
  },
  form: {
    width: "70%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  input: {
    background: "rgb(232, 241, 250)",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { isLoginLoading, hasLoginError, login, isLogged } = useUser();
  const classes = useStyles();
  console.log(process.env.NODE_ENV);
  useEffect(() => {
    // if (isLogged) {
    //   // process.env.NODE_ENV === "development"
    //   //   ? history.push("registro")
    //   //   : history.push("/Delivery/registro");
    //   history.push("manifests");
    // }
  }, [isLogged]);

  function Icon() {
    // Import result is the URL of your image
    return <img src={logo} />;
  }

  const handleSubmit = () => {
    login({ username, password });
    if (isLogged) {
      // process.env.NODE_ENV === "development"
      //   ? history.push("registro")
      //   : history.push("/Delivery/registro");

      history.push("manifests");
    }
  };

  return (
    <div className={classes.paper}>
      <Icon />
      <Typography component="h3" variant="h6">
        RADIOTRACKING
      </Typography>
      {!isLoginLoading && (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="usuario"
            label="Usuario"
            name="usuario"
            autoComplete="usuario"
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            InputProps={{ className: classes.input }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            InputProps={{ className: classes.input }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            INGRESAR
          </Button>
        </form>
      )}
      {hasLoginError && <strong>Credenciales Invalidas</strong>}
    </div>
  );
}
