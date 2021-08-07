import { RootState } from '../configureStore';

import { Feedback } from '../types';

export const getFeedbacks = (state: RootState): Feedback[] => {
  return state.feedback.feedbacks;
};
