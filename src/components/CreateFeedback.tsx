import React from 'react';
import { Form, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { createFeedback } from '../actions/feedback';
import { Feedback } from '../types';
import FeedbackForm from './FeedbackForm';

const CreateFeedback: React.FC = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  
  const dispatch = useDispatch();

  const onCreateFeedback = (feedback: Feedback) =>
    dispatch(createFeedback(feedback));

  const handleSubmit = () => {
    const { name, email, comment } = form.getFieldsValue();
    const key = 'updatable';

    message.loading({ content: 'Adding feedback...', key });
    setTimeout(() => {
      onCreateFeedback({
        _id: new Date().getTime().toString(),
        name,
        email, 
        comment
      });

      message.success({ content: 'Feedback added!', key, duration: 2 });

      history.push('/feedbacks');
    }, 1000);
  };

  return (
    <FeedbackForm onSubmit={handleSubmit} form={form} title="Create new feedback" />
  );
};

export default CreateFeedback;
