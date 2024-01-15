import { SearchOutlined } from "@ant-design/icons";
import { Card, Col, Form, Input, Row } from "antd";
import { FC } from "react";

const CrosbyTableFilter: FC = () => {
  const [form] = Form.useForm();

  return (
    <Card style={{ margin: "24px 16px 0" }}>
      <Form form={form} requiredMark={false} style={{ marginTop: 10 }} layout="vertical">
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item name="name">
              <Input addonBefore={<SearchOutlined />} size="large" placeholder="Teste" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default CrosbyTableFilter;
