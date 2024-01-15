"use client";

import {
  AreaChartOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  MessageOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Badge, Button, Card, Layout, Menu, Space, Tag, Typography, theme } from "antd";
import Image from "next/image";
import React from "react";
import CrosbyLogo from "./CrosbyIcon.svg";
import CrosbyTable from "./CrosbyTable";
import CrosbyTableFilter from "./CrosbyTableFilter";
import { Appeal } from "./types";

const { Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "CrosbyIQ",
    icon: <AreaChartOutlined />,
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
  {
    key: "5",
    label: "Database",
    icon: <DatabaseOutlined />,
  },
  {
    key: "6",
    label: "Billings",
    icon: <FileTextOutlined />,
  },
  {
    key: "9",
    label: "Messages",
    icon: <MessageOutlined />,
  },
  {
    key: "7",
    label: "Team",
    icon: <TeamOutlined />,
  },
  {
    key: "8",
    label: "Settings",
    icon: <SettingOutlined />,
  },
];

const dataSources: Appeal[] = [
  {
    id: "0D7676053256",
    name: "John Miller",
    dateServices: "10/10/2021",
    dateOfBirth: "10/10/1990",
    clinicLocation: "Crosby Clinic",
    insuranceCompany: "Aetna",
    status: "Need Review",
  },
  {
    id: "0D7676053251",
    name: "John Brown",
    dateServices: "10/10/2021",
    dateOfBirth: "10/10/1990",
    clinicLocation: "Crosby Clinic",
    insuranceCompany: "Aetna",
    status: "Need Review",
  },
  {
    id: "0D7676053256",
    name: "John Doe",
    dateServices: "10/10/2021",
    dateOfBirth: "10/10/1990",
    clinicLocation: "Houston, TX",
    insuranceCompany: "Aetna",
    status: "Need Review",
  },
  {
    id: "0D7676053253",
    name: "John Brown",
    dateServices: "10/10/2021",
    dateOfBirth: "10/10/1990",
    clinicLocation: "Phoenix, AZ",
    insuranceCompany: "Aetna",
    status: "Need Review",
  },
  {
    id: "0D767605325",
    name: "John Brown",
    dateServices: "10/10/2021",
    dateOfBirth: "10/10/1990",
    clinicLocation: "New York, NY",
    insuranceCompany: "Aetna",
    status: "Need Review",
  },
  {
    id: "0D7676053254",
    name: "John Brown",
    dateServices: "10/10/2021",
    dateOfBirth: "10/10/1990",
    clinicLocation: "Los Angeles, CA",
    insuranceCompany: "Aetna",
    status: "Need Review",
  },
  {
    id: "0D7676053256",
    name: "John Brown",
    dateServices: "10/10/2021",
    dateOfBirth: "10/10/1990",
    clinicLocation: "Los Angeles, CA",
    insuranceCompany: "Dummy",
    status: "Need Review",
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
          minHeight: "100vh",
          position: "fixed",
          width: 700,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 74,
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

        <Space
          direction="vertical"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Tag
            bordered
            color="red"
            style={{
              marginLeft: 18,
              marginBottom: 24,
              marginTop: 24,
            }}
          >
            EHR Disconnected
          </Tag>

          <Card
            size="small"
            style={{
              width: "100%",
            }}
            bordered
          >
            <Space>
              <Avatar size="large" icon={<UserOutlined />} />
              Dr. Ruther
            </Space>
          </Card>

          <Button
            style={{
              marginTop: 24,
            }}
            type="text"
          >
            Logout
          </Button>
        </Space>
      </Sider>
      <Layout style={{ marginLeft: 200, minHeight: "100vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            marginRight: 20,
          }}
        >
          <Badge size="default" count={11}>
            <div style={{ marginLeft: 20, marginTop: 20 }}>
              <Typography.Title level={2}>Appeals</Typography.Title>
            </div>
          </Badge>
          <Button size="large" type="primary">
            Create Appeal
          </Button>
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
            <CrosbyTable dataSources={dataSources} />
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
