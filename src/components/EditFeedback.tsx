import React, { useCallback } from 'react';
import { Form, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';

import { editFeedback } from '../actions/feedback';
import { getFeedbacks } from '../selectors/feedbackSelectors';

import { Feedback as FeedbackType } from '../types';
import FeedbackForm from './FeedbackForm';

type Params = {
  id: string;
};

const EditFeedback: React.FC = () => {
  const [form] = Form.useForm();

  const params = useParams<Params>();
  const feedbacks = useSelector(getFeedbacks);
  const feedback = feedbacks.find((feedback) => feedback._id === params.id) as FeedbackType;

  const history = useHistory();
  const dispatch = useDispatch();

  const onEditFeedback = useCallback(
    (id: string, feedback: FeedbackType) =>
      dispatch(editFeedback(id, feedback)),
    [dispatch]
  );

  const handleSubmit = () => {
    const { name, email, comment } = form.getFieldsValue();
    const key = 'updatable';

    message.loading({ content: 'Saving feedback...', key });
    setTimeout(() => {
      onEditFeedback(feedback?._id, {
        _id: feedback._id,
        name,
        email,
        comment
      });

      message.success({ content: 'Feedback saved!', key, duration: 2 });

      history.push('/feedbacks');
    }, 1000);
  };

  return (
    <FeedbackForm
      onSubmit={handleSubmit}
      form={form}
      title="Edit feedback"
      initialValues={{
        remember: true,
        name: feedback.name,
        email: feedback.email,
        comment: feedback.comment,
      }}
    />
  );
};

export default EditFeedback;
