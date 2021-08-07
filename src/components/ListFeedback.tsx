import React, { useEffect, useCallback } from 'react';
import { Row, Col, Typography, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import FeedbackItem from './FeedbackItem';
import { fetchFeedback } from '../actions/feedback';
import { getFeedbacks } from '../selectors/feedbackSelectors';
import { Feedback as FeedbackType } from '../types';

const { Title, Paragraph } = Typography;

const ListFeedback: React.FC = () => {
  const feedbacks = useSelector(getFeedbacks);
  const feedbackIds = feedbacks.map((feedback: FeedbackType) => feedback._id);
  const dispatch = useDispatch();

  const fetchFeedbacks = useCallback(() => dispatch(fetchFeedback()), [dispatch]);

  useEffect(() => {
    fetchFeedbacks();
  }, [fetchFeedbacks]);

  return (
    <Row>
      <Col span={12} offset={6}>
        <Typography>
          <Title>Feedback List</Title>
        </Typography>
        <Title level={5}>
          <NavLink to="/feedbacks/new">
            <Space>
              You can write a feedback yourself
              <EditOutlined />
            </Space>
          </NavLink>
        </Title>
        {feedbacks.length < 1 ? (
          <Row justify="center">
            <div style={{ textAlign: 'center' }}>
              <Title level={2}>No feedbacks yet</Title>
            </div>
          </Row>
        ) : (
          feedbackIds.map((id: string) => {
            return <FeedbackItem key={id} id={id} />;
          })
        )}
      </Col>
    </Row>
  );
};

export default ListFeedback;
