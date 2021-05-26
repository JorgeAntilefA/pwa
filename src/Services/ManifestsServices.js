import { urlLogin } from "../Utils/Constants";

export default function ManifestsServices({ carrier }) {
  const params = new URLSearchParams();
  params.append("opcion", "getManifiestos");
  params.append("carrier", carrier);
  // login({ username, password });
  return fetch(urlLogin, {
    method: "POST",
    body: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((resp) => resp.json())
    .then((usu) => {
      return usu;
    })
    .catch(console.error);
}
