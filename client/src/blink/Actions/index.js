export const checkLoginDetails = (data) => ({
    type: "CHECK_LOGIN_DETAILS",
    data : data
});

export const createUser = (data) => ({
    type: "CREATE_USER",
    data : data
});

export const editUserDetails = (data) => ({
    type: "EDIT_USER_DETAILS",
    data : data
});

export const fetchCount = (data) => ({
    type: "FETCH_COUNT",
    data : data
});
export const submitUpdatedUserDetails = (data) => ({
    type : "SUBMIT_UPDATED_USER_DETAILS",
    data : data
})

export const insertCsvMails = (data) => ({
    type : "INSERT_CSV_MAILS",
    data : data
})

export const sendCsvMails = (data) => ({
    type : "SEND_CSV_MAILS",
    data : data
})

export const sendListname = (data) => ({
    type : "SEND_LISTNAME",
    data : data
})

export const contactList = (data) => ({
    type : "CONTACT_LIST",
    data : data
})

export const dashboardListCount = (data) => ({
    type : "DASHBOARD_LIST_COUNT",
    data : data
})

export const dashboardEmailCount = (data) => ({
    type : "DASHBOARD_EMAIL_SHOW",
    data : data
})

export const uploadImageToCloud = (data) => ({
    type : "UPLOAD_IMAGE_TO_CLOUD",
    data : data
})

export const googlelogindata = (data) => ({
    type : "GOOGLE_LOGIN_DATA",
    data : data  
})