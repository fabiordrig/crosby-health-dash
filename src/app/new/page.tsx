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
import {
  Avatar,
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Layout,
  Menu,
  Row,
  Space,
  Tag,
  Typography,
  theme,
} from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import CrosbyLogo from "../CrosbyIcon.svg";

const { Content, Footer, Sider } = Layout;

const NewAppeal: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();

  const handleCancel = () => {
    router.push("/");
    form.resetFields();
  };

  const [form] = Form.useForm();

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
          onClick: () => router.push("/"),
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

  return (
    <Layout hasSider>
      <Sider
        theme="light"
        style={{
          overflow: "auto",
          minHeight: "100vh",
          position: "fixed",
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
          <div style={{ marginLeft: 20, marginTop: 20 }}>
            <Typography.Title level={2}>New Appeal</Typography.Title>
          </div>
        </div>

        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "center",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Form layout="vertical">
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item label="Patient Name" name="name">
                    <Input size="large" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Date of Service" name="dateService">
                    <DatePicker size="large" style={{ width: "100%" }} format="YYYY/MM/DD" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Date of Birth" name="dateOfBirth">
                    <DatePicker size="large" style={{ width: "100%" }} format="YYYY/MM/DD" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Clinic location" name="clinicLocation">
                    <Input size="large" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item label="Insurance Company" name="insuranceCompany">
                    <Input size="large" />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item label="Appeal" name="appeal">
                    <Input.TextArea rows={4} />
                  </Form.Item>
                </Col>
                <Col span={24}></Col>
              </Row>
              <Button htmlType="submit" type="primary" size="large">
                Submit
              </Button>
              <Button htmlType="reset" size="large" type="text" onClick={handleCancel}>
                Cancel
              </Button>
            </Form>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Crosby Health ©{new Date().getFullYear()} Created by Fabio Rodrigues
        </Footer>
      </Layout>
    </Layout>
  );
};

export default NewAppeal;
