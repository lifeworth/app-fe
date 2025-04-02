"use client";
import React, { useEffect, useState } from "react";
import { fetchApi, ArticleObj } from "./api";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function page() {
  const [articles, setArticles] = useState<ArticleObj[]>();
  useEffect(() => {
    fetchApi().then((r) => {
      r.json().then((json) => {
        const list = json.data as ArticleObj[];
        console.log("length: ", list.length);
        setArticles(list);
      });
    });
  }, []);
  return (
    <>
      <div className="container flex justify-center items-center">
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={articles}
          footer={
            <div>
              <b>ant design</b> footer part
            </div>
          }
          renderItem={(item) => (
            <List.Item
              key={item.object.data.id}
              actions={[
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />,
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                avatar={<Avatar src={item.object.data.user.avatar} />}
                title={<a href="#">{item.object.data.title}</a>}
                description={item.object.data.commentable}
              />
              {item.object.data.important_collection}
            </List.Item>
          )}
        />
      </div>
    </>
  );
}
