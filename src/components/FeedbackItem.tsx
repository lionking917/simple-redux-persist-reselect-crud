import React from 'react';
import { Button, Typography, Divider, Modal, Space, Row } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { deleteFeedback } from '../actions/feedback';
import { getFeedbacks } from '../selectors/feedbackSelectors';
import { Feedback as FeedbackType } from '../types';

const { Title, Paragraph, Text } = Typography;
const { confirm } = Modal;

const FeedbackItem: React.FC<{ id: string }> = ({ id }) => {
  const dispatch = useDispatch();
  const feedbacks = useSelector(getFeedbacks);

  const { name, email, comment } = feedbacks.find(
    (feedback) => feedback._id === id
  ) as FeedbackType;

  const onDelete = (id: string) => dispatch(deleteFeedback(id));

  const showConfirmDialog = () => {
    confirm({
      title: 'Delete feedback',
      icon: <DeleteOutlined />,
      content: 'Are you sure you want to delete this feedback?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        onDelete(id);
      },
      onCancel() {
        return;
      }
    });
  };

  return (
    <article>
      <NavLink to={`/feedbacks/${id}`}>
        <Title level={3} className="feedback-item-name">
          {name}
        </Title>
      </NavLink>
      <Text style={{fontSize: '18px'}}>{email}</Text>
      <Paragraph style={{marginBottom: 0}}>{comment}</Paragraph>
      <Space direction="horizontal">
        <NavLink to={`/feedbacks/edit/${id}`} style={{ marginRight: '5px' }}>
          <Button icon={<EditOutlined />}>Edit</Button>
        </NavLink>
        <Button
          onClick={showConfirmDialog}
          icon={<DeleteOutlined />}
          danger
        >
          Delete
        </Button>
      </Space>
      <Divider />
    </article>
  );
};

export default FeedbackItem;
