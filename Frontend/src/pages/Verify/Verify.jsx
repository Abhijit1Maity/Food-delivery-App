import { useNavigate, useSearchParams } from "react-router-dom";
import "./verify.css";
import axios from "axios";

import React, { useContext, useEffect } from "react";

import { StoreContext } from "../../context/StoreContext";

export default function Verify() {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();
  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/myorders");

    } else {
      
      navigate("/");
      
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
}
