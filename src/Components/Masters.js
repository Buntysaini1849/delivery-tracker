import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";

export default function Products() {
  
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="container-fluid">
        <h5>This is master's page</h5>
      </div>
    </div>
  );
}
