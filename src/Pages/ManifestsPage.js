import React from "react";
import Manifests from "./../Components/Manifests/Manifests";
import Bar from "../Components/Shared/Bar";
import FAB from "../Components/Shared/FAB";
import { ManifestsContextProvider } from "../Context/ManifestsContext";
import * as serviceWorkerRegistration from "../serviceWorkerRegistration";

export default function ManifestsPage() {
  const user = localStorage.getItem("user");

  // useEffect(() => {}, []);

  return (
    <div>
      {/* <ManifestsContextProvider> */} <Bar />
      <div>{user}</div>
      <Manifests />
      <FAB />
      {/* </ManifestsContextProvider> */}
    </div>
  );
}
serviceWorkerRegistration.register();
