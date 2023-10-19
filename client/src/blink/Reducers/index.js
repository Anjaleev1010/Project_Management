const INITIAL_STATE = {};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case "CHECK_LOGIN_DETAILS":
      return { ...state, loading: true };
    case "LOGIN_DETAILS_RECEIVED":
      return { ...state, loading: true, loginDetails: action.json };

    case "CREATE_USER":
      return { ...state, loading: true };
    case "USER_CREATED_SUCCESSFULLY":
      return { ...state, loading: true, details: action.json };

    case "EDIT_USER_DETAILS":
      return { ...state, loading: true };
    case "EDIT_USER_DETAILS_RECEIVED":
      return { ...state, loading: true,editdetails: action.json };
       
    case "SUBMIT_UPDATED_USER_DETAILS":
      return { ...state, loading: true };
    case "SUBMIT_UPDATED_USER_DETAILS_RECEIVED":
      return { ...state, loading: true, updateDetails: action.json };

    case "INSERT_CSV_MAILS":
      return { ...state, loading: true };
    case "INSERT_CSV_MAILS_RECEIVED":
      return { ...state, loading: true, getmails: action.json };

    case "SEND_CSV_MAILS":
      return { ...state, loading: true };
    case "SEND_CSV_MAILS_RECEIVED":
      return { ...state, loading: true, usermails: action.json };

    case "SEND_LISTNAME":
      return { ...state, loading: true };
    case "SEND_LISTNAME_RECEIVED":
      return { ...state, loading: true, listsnames: action.json };

    case "CONTACT_LIST":
      return { ...state, loading: true };
    case "CONTACT_LIST_RECEIVED":
      return { ...state, loading: true, droplist: action.json };

    case "DASHBOARD_LIST_COUNT":
      return { ...state, loading: true };
    case "DASHBOARD_LIST_COUNT_RECEIVED":
      return { ...state, loading: true, userListCount: action.json };

    case "DASHBOARD_EMAIL_SHOW":
      return { ...state, loading: true };
    case "DASHBOARD_EMAIL_SHOW_RECEIVED":
      return { ...state, loading: true, userEmailCount: action.json };

    case "GOOGLE_LOGIN_DATA":
      return { ...state, loading: true };
    case "GOOGLE_LOGIN_RECEIVED":
      return { ...state, loading: true, googledetails : action.json };

    case "UPLOAD_IMAGE_TO_CLOUD":
      return { ...state, loading: true };
    case "UPLOAD_IMAGE_TO_CLOUD_DONE":
      return { ...state, loading: true, cloudImage: action.json };
      case "FETCH_COUNT":
        return { ...state, loading: true, fetchCount: action.json };
    default:
      if (state !== INITIAL_STATE) {
        return { state, loading: true };
      }
    return state;
  }
};

export default reducer;