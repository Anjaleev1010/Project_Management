import axios from "axios"
import { put, takeLatest, all } from "redux-saga/effects";
import formData from '../components/login/Register'

function* checkLoginDetails(action) {
  const outputData = yield fetch('http://localhost:4000/', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "LOGIN_DETAILS_RECEIVED", json: outputData });
}


function* createUser(action) {
  const outputData = yield fetch('http://localhost:4000/createUser', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "USER_CREATED_SUCCESSFULLY", json: outputData });
}

function* editUserDetails(action) {
  const outputData = yield fetch('http://localhost:4000/editUserDetails', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "EDIT_USER_DETAILS_RECEIVED", json: outputData });
}

function* submitUpdatedUserDetails(action) {
  const outputData = yield fetch('http://localhost:4000/submitUpdatedUserDetails', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "SUBMIT_UPDATED_USER_DETAILS_RECEIVED", json: outputData });
}

function* insertCsvMails(action) {
  const outputData = yield fetch('http://localhost:4000/insertCsvMails', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "INSERT_CSV_MAILS_RECEIVED", json: outputData });
}

function* sendCsvMails(action) {
  const outputData = yield fetch('http://localhost:4000/sendCsvMails', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "SEND_CSV_MAILS_RECEIVED", json: outputData });
}

function* sendListname(action) {
  const outputData = yield fetch('http://localhost:4000/sendListname', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "SEND_LISTNAME_RECEIVED", json: outputData });
}

function* contactList(action) {
  const outputData = yield fetch('http://localhost:4000/contactList', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "CONTACT_LIST_RECEIVED", json: outputData });
}

function* dashboardListCount(action) {
  const outputData = yield fetch('http://localhost:4000/dashboardListCount', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "DASHBOARD_LIST_COUNT_RECEIVED", json: outputData });
}

function* dashboardEmailCount(action) {
  const outputData = yield fetch('http://localhost:4000/dashboardEmailCount', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "DASHBOARD_EMAIL_SHOW_RECEIVED", json: outputData });
}

function* googlelogindata (action) {
  const outputData = yield fetch('http://localhost:4000/email/access1', {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(action.data),
  }).then((response) => response.json());
  yield put({ type: "GOOGLE_LOGIN_RECEIVED", json: outputData });
}

function* uploadImageToCloud(action) {
  const outputData = yield fetch('https://api.cloudinary.com/v1_1/doarstyvq/image/upload', {  
  method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: (formData),
  }).then((response) => response.json());
  console.log(outputData)
  yield put({ type: "UPLOAD_IMAGE_TO_CLOUD_DONE", json: outputData });
}

function* fetchCount(action) {
    const outputData = yield fetch('/task', {  
    method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    body: JSON.stringify(action.data),
    }).then((response) => response.json());
    console.log(outputData)
    yield put({ type: "FETCH_COUNT", json: outputData });
  }
  
function* actionWatcher() {
  yield takeLatest("CHECK_LOGIN_DETAILS", checkLoginDetails);
  yield takeLatest("CREATE_USER", createUser);
  yield takeLatest("EDIT_USER_DETAILS", editUserDetails );
  yield takeLatest("INSERT_CSV_MAILS", insertCsvMails );
  yield takeLatest("SEND_CSV_MAILS", sendCsvMails );
  yield takeLatest("GOOGLE_LOGIN_DATA", googlelogindata );
  yield takeLatest("SEND_LISTNAME", sendListname );
  yield takeLatest("CONTACT_LIST", contactList );
  yield takeLatest("SUBMIT_UPDATED_USER_DETAILS", submitUpdatedUserDetails );
  yield takeLatest("DASHBOARD_LIST_COUNT", dashboardListCount );
  yield takeLatest("DASHBOARD_EMAIL_SHOW", dashboardEmailCount );
  yield takeLatest("UPLOAD_IMAGE_TO_CLOUD", uploadImageToCloud );
  yield takeLatest("FETCH_COUNT", fetchCount );

}
export default function* rootSaga() {
    yield all([actionWatcher()]);
}