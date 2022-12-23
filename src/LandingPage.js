import { Select } from "antd";
import React, { useState } from "react";
import { Comments } from "./Comments";
import { User } from "./User";

export const LandingPage = () => {
  const [Value, setValue] = useState();
  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <div>
      <Select
        defaultValue="Select"
        style={{
          width: 190,
        }}
        onChange={handleChange}
        options={[
          {
            value: "UserData",
            label: "UserData",
          },
          {
            value: "comentsUser",
            label: "ComentsUserData",
          },
        ]}
      />
      <>
        {Value === "UserData" ? (
          <User />
        ) : Value === "comentsUser" ? (
          <Comments />
        ) : null}
      </>
    </div>
  );
};
