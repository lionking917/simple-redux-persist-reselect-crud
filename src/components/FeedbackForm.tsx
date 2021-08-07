import React from 'react';
import { Row, Col, Typography, Form, Input, Button, FormInstance } from 'antd';
import { Store } from 'rc-field-form/lib/interface';

const { Title } = Typography;
const { TextArea } = Input;

type FeedbackFormProps = {
  form: FormInstance<string> | undefined;
  title: string;
  onSubmit: () => void;
  initialValues?: Store & {
    name: string,
    email: string,
    comment: string
  };
};

const FeedbackForm: React.FC<FeedbackFormProps> = ({
  form,
  onSubmit,
  title,
  initialValues = {}
}) => {
  return (
    <Row style={{ paddingBottom: '30px' }}>
      <Col span={12} offset={6}>
        <Typography>
          <Title style={{ color: '#000033' }}>{title}</Title>
        </Typography>
        <Form
          form={form}
          layout="vertical"
          onFinish={onSubmit}
          initialValues={initialValues}
        >
          <Form.Item
            label="User name"
            name="name"
            rules={[{ required: true, message: "User name can't be empty" }]}
          >
            <Input size="large" type="text" required />
          </Form.Item>
          <Form.Item
            label="User email"
            name="email"
            rules={[{ required: true, message: "User email can't be empty" }]}
          >
            <Input size="large" type="text" required />
          </Form.Item>
          <Form.Item
            label="User comment"
            name="comment"
            rules={[
              { required: true, message: 'You should provide some comment' }
            ]}
          >
            <TextArea rows={10} />
          </Form.Item>

          <Form.Item>
            <Row justify="end">
              <Button type="primary" htmlType="submit" size="large">
                Save
              </Button>
            </Row>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default FeedbackForm;
