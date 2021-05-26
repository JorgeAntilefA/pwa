import { urlLogin } from "../Utils/Constants";

export default function LoginServices({ username, password }) {
  const params = new URLSearchParams();
  params.append("opcion", "funcion_login");
  params.append("usuario", username);
  params.append("password", password);
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
