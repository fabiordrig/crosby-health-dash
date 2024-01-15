"use client";

import { MailOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Badge, Layout, Menu, Typography, theme } from "antd";
import Image from "next/image";
import React from "react";
import CrosbyLogo from "./CrosbyIcon.svg";
import CrosbyTableFilter from "./CrosbyTableFilter";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "CrosbyIQ",
    icon: <MailOutlined />,
    children: [
      {
        key: "2",
        label: "CrosbyCDI",
      },
      {
        key: "3",
        label: "Appeals",
      },
      {
        key: "4",
        label: "Summited Appeals",
      },
    ],
  },
];

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider
        theme="light"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 64,
            background: colorBgContainer,
            marginBottom: 24,
            marginTop: 24,
          }}
        >
          <Image src={CrosbyLogo} alt="Crosby Logo" width={50} height={50} />
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={["3"]}
          defaultOpenKeys={["1"]}
          inlineCollapsed
          items={items}
        />
      </Sider>
      <Layout theme="light" style={{ marginLeft: 200, height: "100vh" }}>
        <div style={{ marginTop: 20 }}>
          <Badge size="default" count={11}>
            <div style={{ marginLeft: 20, marginTop: 20 }}>
              <Typography.Title level={2}>Appeals</Typography.Title>
            </div>
          </Badge>
        </div>

        <CrosbyTableFilter />

        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <p>long content</p>
            {Array.from({ length: 2 }, (_, index) => (
              <React.Fragment key={index}>
                {index % 20 === 0 && index ? "more" : "..."}
                <br />
              </React.Fragment>
            ))}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Crosby Health ©{new Date().getFullYear()} Created by Fabio Rodrigues
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
