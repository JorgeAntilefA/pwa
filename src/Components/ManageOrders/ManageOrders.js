import React, { useEffect, useContext, useState } from "react";
import { withScriptjs } from "react-google-maps";
// import Map from "../Shared/Maps";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Description from "@material-ui/icons/Description";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccountCircleOnIcon from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import SeparatorManifest from "./../Shared/Separator";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Version from "./../Shared/Version";
import Estados from "./../Shared/Estados";
import Solicitudes from "./../Shared/Solicitudes";
import Receptor from "./../Shared/Receptor";
import Button from "@material-ui/core/Button";

import ImagePreview from "../Shared/ImagePreview";
import Modal from "./../Shared/Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ManageOrders() {
  const MapLoader = withScriptjs(Map);
  const location = useLocation();
  const [pedido, setPedido] = useState();
  const [manifiesto, setManifiesto] = useState();
  const [fecha, setFecha] = useState();
  const [direccion, setDireccion] = useState();
  const [nombreCliente, setNombreCliente] = useState();
  const [telefono, setTelefono] = useState();
  const [uri, setUri] = useState();
  const classes = useStyles();
  console.log(uri);
  useEffect(() => {
    setPedido(location.state.pedido);
    setManifiesto(location.state.manifiesto);
    setFecha(location.state.fecha);
    setDireccion(location.state.direccion);
    setNombreCliente(location.state.nombre_cliente);
    setTelefono(location.state.telefono);
  }, []);

  return (
    <div style={{ marginBottom: "100px" }}>
      {/* <MapLoader
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA4ZZNjoY-DK2odO_2ZHpp-ju479SYq29s"
        loadingElement={<div style={{ height: `50%` }} />}
      /> */}
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <Description />
          </ListItemIcon>
          <ListItemText primary={manifiesto + " - " + fecha} />
        </ListItem>
        <SeparatorManifest />
        <ListItem button>
          <ListItemIcon>
            <ShoppingBasketIcon />
          </ListItemIcon>
          <ListItemText primary={pedido} />
        </ListItem>
        <SeparatorManifest />
        <ListItem button>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <ListItemText primary={direccion} />
        </ListItem>
        <SeparatorManifest />
        <ListItem button>
          <ListItemIcon>
            <AccountCircleOnIcon />
          </ListItemIcon>
          <ListItemText primary={nombreCliente} />
        </ListItem>
        <SeparatorManifest />
        <ListItem button>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary={telefono} />
        </ListItem>
      </List>
      <Version />
      <Estados />
      <Solicitudes />
      <Receptor />
      {!uri ? (
        <Modal setUri={setUri} uri={uri} />
      ) : (
        <ImagePreview dataUri={uri} />
      )}
      <Button variant="contained" color="secondary" style={{ marginTop: 10 }}>
        Guardar
      </Button>
    </div>
  );
}
