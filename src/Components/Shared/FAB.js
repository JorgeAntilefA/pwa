import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Check";
import Context from "../../Context/ManifestsContext";
import usePending from "../../Hooks/usePending";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(10),
    right: theme.spacing(2),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();
  const { manContext, setManContext } = useContext(Context);
  //console.log(manContext);
  const { getPending } = usePending();
  const history = useHistory();

  async function validateManifest() {
    if (manContext !== null && manContext.length > 1) {
      history.push("pendings");
      //console.log(manContext);
    } else {
      console.log("vacio");
      return false;
    }
  }

  return (
    <div>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={() => validateManifest()}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}
