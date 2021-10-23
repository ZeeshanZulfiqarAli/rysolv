import {
  CHANGE_INPUT,
  CHANGE_VIEW,
  FETCH_QUESTIONS_FAILURE,
  FETCH_QUESTIONS_SUCCESS,
  FETCH_QUESTIONS,
  INPUT_ERROR,
  RESET_STATE,
  SUBMIT_COMPANY_RESPONSE_FAILURE,
  SUBMIT_COMPANY_RESPONSE_SUCCESS,
  SUBMIT_COMPANY_RESPONSE,
} from './constants';

export function changeInput(payload) {
  return {
    payload,
    type: CHANGE_INPUT,
  };
}

export function changeView(payload) {
  return {
    payload,
    type: CHANGE_VIEW,
  };
}

export function fetchQuestionsFailure(payload) {
  return {
    payload,
    type: FETCH_QUESTIONS_FAILURE,
  };
}

export function fetchQuestionsSuccess(payload) {
  return {
    payload,
    type: FETCH_QUESTIONS_SUCCESS,
  };
}

export function fetchQuestions(payload) {
  return {
    payload,
    type: FETCH_QUESTIONS,
  };
}

export function inputError(payload) {
  return {
    payload,
    type: INPUT_ERROR,
  };
}

export function resetState() {
  return { type: RESET_STATE };
}

export function submitCompanyResponseFailure(payload) {
  return {
    payload,
    type: SUBMIT_COMPANY_RESPONSE_FAILURE,
  };
}

export function submitCompanyResponseSuccess() {
  return { type: SUBMIT_COMPANY_RESPONSE_SUCCESS };
}

export function submitCompanyResponse(payload) {
  return {
    payload,
    type: SUBMIT_COMPANY_RESPONSE,
  };
}
