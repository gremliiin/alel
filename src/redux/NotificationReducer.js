const SET_TEXT = "NOTIFICATION/SET_TEXT";
const SET_STATUS = "NOTIFICATION/SET_STATUS";
const SET_ACTIVE = "NOTIFICATION/SET_ACTIVE";

const initialState = {
  text: "fff  fffff ff fff f",
  status: false,
  isActive: false,
}

const NotificationReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    case SET_ACTIVE:
      let copyState = {...state};
      copyState.isActive = action.isActive;
      return copyState;
    default:
      return {...state}
  }
}

const setTextAC = (text) => ({type: SET_TEXT, text});
const setStatusAC = (status) => ({type: SET_STATUS, status});
const setActiveAC = (isActive) => ({type: SET_ACTIVE, isActive});

export const ToggleNotificationStatusTC = (text, status, isActive, time) => async (dispatch) => {

  dispatch(setTextAC(text));
  dispatch(setStatusAC(status));
  dispatch(setActiveAC(isActive));

  setTimeout(() => {
    dispatch(setActiveAC(false));
  }, time);

}

export default NotificationReducer;