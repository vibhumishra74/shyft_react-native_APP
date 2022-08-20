

export const loanData = (data) => ({
    type: "enquery",
    payload:data
})
export const userDetails = (data) => ({
    type: "user_Detail",
    payload:data
})
export const saveToken = (data) => ({
    type: "SAVE_TOKEN",
    token:data
})
export const restoreToken = (data) => ({
    type: "Restore_TOKEN",
    token:data
})
export const isUserLogedin = (data) => ({
    type: "isUser_Logedin",
    payload:data
})
export const isEmailLogin = (data) => ({
    type: "isEmail_Logedin",
    payload:data
})
