import React from "react";
import PendingOrders from "./../Components/PendingsOrders/PendingOrders";

export default function ManifestsPage() {
  const user = localStorage.getItem("user");

  return (
    <div>
      <PendingOrders />
    </div>
  );
}
