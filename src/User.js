import { Table } from "antd";
import React, { useEffect, useState } from "react";

export const User = () => {
  const [userdata, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((val) => setUserData(val));
  }, []);
  console.log(userdata);
  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <a>Delete</a>,
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record, description) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.email}
            </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={userdata}
      />
    </div>
  );
};
