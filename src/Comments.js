import { Table } from "antd";
import React, { useEffect, useState } from "react";

export const Comments = () => {
  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((val) =>
        setCommentData(
          val.map((item1) => ({
            id: item1.id,
            name: item1.name,
            key: item1.id,
            body: item1.body,
          }))
        )
      );
  }, []);
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
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.body}
            </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={commentData}
      />
    </div>
  );
};
