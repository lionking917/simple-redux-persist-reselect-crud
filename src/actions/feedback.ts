import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { FeedbackAction, FeedbackState } from '../reducers/feedback';
import { Feedback } from '../types';

export const FETCH_FEEDBACK = 'FETCH_FEEDBACK';
export const CREATE_FEEDBACK = 'CREATE_FEEDBACK';
export const EDIT_FEEDBACK = 'EDIT_FEEDBACK';
export const DELETE_FEEDBACK = 'DELETE_FEEDBACK';

type ThunkResult<R> = ThunkAction<R, FeedbackState, undefined, FeedbackAction>;

export const fetchFeedback = (): ThunkResult<void> => {
    return (dispatch: Dispatch) => {
        dispatch({ type: FETCH_FEEDBACK });
    };
}

export const createFeedback = (feedback: Feedback): ThunkResult<void> => {
    return (dispatch: Dispatch) => {
        dispatch({ type: CREATE_FEEDBACK, payload: {feedback} });
    };
}

export const editFeedback = (_id: string, feedback: Feedback): ThunkResult<void> => {
    return (dispath: Dispatch) => {
        dispath({ type: EDIT_FEEDBACK, payload: {_id, feedback} });
    };
}

export const deleteFeedback = (_id: string): ThunkResult<void> => {
    return (dispath: Dispatch) => {
        dispath({ type: DELETE_FEEDBACK, payload: {_id} });
    };
}