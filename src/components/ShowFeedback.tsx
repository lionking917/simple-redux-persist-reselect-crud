import React, { useCallback } from 'react';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { Row, Col, Typography, Space, Modal, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

import { deleteFeedback } from '../actions/feedback';
import { getFeedbacks } from '../selectors/feedbackSelectors';
import { Feedback as FeedbackType } from '../types';
import NotFound from './NotFound';

type Params = {
  id: string;
};

const { Title, Paragraph } = Typography;
const { confirm } = Modal;

const ShowFeedback: React.FC = () => {
  const params = useParams<Params>();
  const feedbacks = useSelector(getFeedbacks);
  
  const feedback = feedbacks.find((feedback) => feedback._id === params.id) as FeedbackType;
  const dispatch = useDispatch();
  const history = useHistory();

  const onDelete = useCallback(
    (id: string) => {
      dispatch(deleteFeedback(id));

      history.push('/');
    },
    [dispatch, history]
  );

  const showConfirmDialog = () => {
    confirm({
      title: 'Delete feedback',
      icon: <DeleteOutlined />,
      content: 'Are you sure you want to delete this feedback?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk() {
        onDelete(feedback._id);
      },
      onCancel() {
        return;
      }
    });
  };

  if (!feedback) {
    return <NotFound />;
  }

  return (
    <Row style={{ paddingBottom: '30px' }}>
      <Col span={12} offset={6}>
        <Typography>
          <Title style={{ color: '#000033' }}>{feedback.name}</Title>
        </Typography>
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: '30px' }}
        >
          <Space>
            <Paragraph style={{ color: '#000033' }}>
              {feedback.email}
            </Paragraph>
            <Paragraph style={{ color: '#000033' }}>
              {feedback.comment}
            </Paragraph>
          </Space>
          <Space>
            <NavLink
              to={`/feedbacks/edit/${feedback._id}`}
              style={{ marginRight: '5px' }}
            >
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
        </Row>
      </Col>
    </Row>
  );
};

export default ShowFeedback;
