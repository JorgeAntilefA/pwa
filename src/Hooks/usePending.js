import { useCallback, useContext, useState } from "react";
import PendingServices from "../Services/PendingService";
import Context from "../Context/PendingContext";

export default function usePending() {
  const { pendingContext, setPendingContext } = useContext(Context);

  const getPending = useCallback(({ manifiestos }) => {
    PendingServices({ manifiestos })
      .then((res) => {
        console.log(res);
        setPendingContext(res);
        localStorage.setItem("pendientes", JSON.stringify(res));
      })
      .catch((err) => {
        console.log("Error al obtener registros." + err);
      });
  }, []);

  return {
    getPending,
    pendingContext,
  };
}
