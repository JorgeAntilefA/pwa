import { urlLogin } from "../Utils/Constants";

export default function PendingServices({ manifiestos }) {
  const params = new URLSearchParams();
  params.append("opcion", "getPedidosV3");
  params.append("manifiestos", manifiestos);
  console.log(manifiestos);
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
