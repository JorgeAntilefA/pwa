import React, { useEffect, useContext } from "react";
import BarSearch from "../Shared/BarSearch";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import usePending from "../../Hooks/usePending";
import Context from "../../Context/ManifestsContext";
import PenContext from "../../Context/PendingContext";
import { useHistory } from "react-router-dom";
import SeparatorManifest from "./../Shared/Separator";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(50),
    right: theme.spacing(2),
  },
}));

export default function PendingOrders() {
  const classes = useStyles();
  const history = useHistory();
  const carrier = localStorage.getItem("carrier");
  const { getPending } = usePending();
  const { manContext, setManContext } = useContext(Context);
  const { pendingContext } = useContext(PenContext);
  const [text, setText] = React.useState("");

  useEffect(() => {
    const getPendingOrders = async () => {
      let manifestChecked = [];
      console.log(manContext);
      manContext.forEach((element) => {
        if (element.n_man !== undefined) {
          manifestChecked.push(element.n_man);
        }
      });
      let manifiestos = manifestChecked.toString();

      getPending({ manifiestos });
    };
    getPendingOrders();
  }, [carrier]);

  function handleClick(item) {
    console.log(item);
    history.push({
      pathname: "/manageOrders",
      state: item, // your data array of objects
    });
  }

  return (
    <div>
      <BarSearch />
      <List className={classes.root}>
        {pendingContext.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <div>
              <ListItem
                key={value.pedido}
                role={undefined}
                dense
                button
                onClick={() => handleClick(value)}
              >
                <ListItemText
                  id={labelId}
                  secondary={
                    <div>
                      <div>{value.numero + " - " + value.pedido}</div>
                      <div>
                        {value.manifiesto + " - " + value.nombre_cliente}
                      </div>
                      <div>{value.comuna}</div>
                      <div>{value.direccion}</div>
                      <div>{value.referencia}</div>
                    </div>
                  }
                />
              </ListItem>
              <SeparatorManifest />
            </div>
          );
        })}
      </List>
    </div>
  );
}
