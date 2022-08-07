/** @format */
import { useState } from "react";

function VerfiyPage() {
  const [token, setToken] = useState("");
  const userName = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div>
      <div>verfiy account</div>
    </div>
  );
}

export default VerfiyPage;
