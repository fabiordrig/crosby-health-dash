import { Button, Card, Col, DatePicker, Form, Input, Row, Space } from "antd";
import { FC } from "react";

const CrosbyTableFilter: FC = () => {
  const [form] = Form.useForm();

  return (
    <Card style={{ margin: "24px 16px 0" }}>
      <Form form={form} requiredMark={false} style={{ marginTop: 10 }} layout="vertical">
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item label="Patient Name" name="name">
              <Input size="large" placeholder="Search by patient name" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Date of Service" name="dateOfService">
              <DatePicker.RangePicker size="large" style={{ width: "100%" }} format="YYYY/MM/DD" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Date of Birth" name="dateOfBirth">
              <DatePicker
                size="large"
                style={{ width: "100%" }}
                placeholder="Search date of birth"
                format="YYYY/MM/DD"
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Clinic Location" name="clinicLocation">
              <Input size="large" placeholder="Search by clinic location" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="Insurance Company" name="insuranceCompany">
              <Input size="large" placeholder="Search by insurance company" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Space direction="horizontal" size="small">
              <Button htmlType="submit" type="primary" size="large">
                Search
              </Button>
              <Button htmlType="reset" size="large" type="text" onClick={() => form.resetFields()}>
                Reset
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default CrosbyTableFilter;
