import {
  FETCH_FEEDBACK,
  CREATE_FEEDBACK,
  EDIT_FEEDBACK,
  DELETE_FEEDBACK,
} from '../actions/feedback';
import { Feedback } from '../types';

export type FeedbackState = {
  feedbacks: Array<Feedback>;
};

export type FetchFeedbackAction = {
  type: typeof FETCH_FEEDBACK;
};

export type CreateFeedbackAction = {
  type: typeof CREATE_FEEDBACK;
  payload: { feedback: Feedback };
};

export type EditFeedbackAction = {
  type: typeof EDIT_FEEDBACK;
  payload: { _id: string, feedback: Feedback };
};

export type DeleteFeedbackAction = {
  type: typeof DELETE_FEEDBACK;
  payload: { _id: string };
};

export type FeedbackAction =
  | FetchFeedbackAction
  | CreateFeedbackAction
  | EditFeedbackAction
  | DeleteFeedbackAction;

export const initialState = {
  feedbacks: []
}

const feedback = (state: FeedbackState = initialState, action: FeedbackAction): FeedbackState => {
  switch(action.type) {
    case FETCH_FEEDBACK:
      return {
        ...state,
        feedbacks: state.feedbacks
      };
    case CREATE_FEEDBACK:
      return {
        ...state,
        feedbacks: [...state.feedbacks, action.payload.feedback]
      };
    case EDIT_FEEDBACK:
      return {
        ...state,
        feedbacks: state.feedbacks.map((feedback) => {
          if (feedback._id === action.payload._id) {
            return action.payload.feedback;
          }
          return feedback;
        })
      };
    case DELETE_FEEDBACK:
      return {
        ...state,
        feedbacks: state.feedbacks.filter((feedback) => feedback._id !== action.payload._id)
      };
    default:
      return state;
  }
}

export default feedback;