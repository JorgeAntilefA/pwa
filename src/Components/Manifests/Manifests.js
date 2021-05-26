import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import useManifests from "../../Hooks/useManifests";
import Context from "../../Context/ManifestsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Manifests() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const { manifestsList, man } = useManifests();
  const carrier = localStorage.getItem("carrier");
  const { manContext, setManContext } = useContext(Context);
  const [localMan, setLocalMan] = React.useState([]);

  useEffect(() => {
    const getManifests = async () => {
      manifestsList({ carrier });
      let manifiestos = JSON.parse(localStorage.getItem("manifiesto"));
      setLocalMan(manifiestos);
      // if (navigator.onLine) {
      //   console.log("si");
      // } else {
      //   console.log("no");
      // }
    };
    getManifests();
  }, [carrier]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setManContext(newChecked);
    //console.log(manContext);
    setChecked(newChecked);
  };
  return (
    <div>
      <List className={classes.root}>
        {man.map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          return (
            <ListItem
              key={value.n_man}
              role={undefined}
              dense
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.n_man} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
