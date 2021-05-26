import { useCallback, useState, useContext } from "react";
import ManifestsServices from "../Services/ManifestsServices";
//import Context from "../Context/ManifestsContext";

export default function useManifests() {
  const [man, setMan] = useState([]);
  //const { manContext, setManContext } = useContext(Context);
  const manifestsList = useCallback(({ carrier }) => {
    ManifestsServices({ carrier })
      .then((res) => {
        setMan(res);
        localStorage.setItem("manifiestos", JSON.stringify(res));
      })
      .catch((err) => {
        console.log("error al ingresar" + err);
      });
  }, []);

  return {
    manifestsList,
    man,
    //manContext,
  };
}
