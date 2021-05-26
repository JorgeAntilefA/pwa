import React from "react";
import ManageOrders from "./../Components/ManageOrders/ManageOrders";

export default function ManageOrdersPage() {
  const user = localStorage.getItem("user");

  // useEffect(() => {}, []);

  return (
    <div>
      <div>{user}</div>
      <ManageOrders />
    </div>
  );
}
