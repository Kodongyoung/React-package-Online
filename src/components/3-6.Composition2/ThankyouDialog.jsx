import React from "react";
import Dialog from "./Dialog";

export default function ThankyouDialog() {
  return (
    <div>
      <Dialog
        title={<h1 style={{ color: "blue" }}>Thanks</h1>}
        description="It`s honer to meet you!"
        button="close"
      />
    </div>
  );
}
