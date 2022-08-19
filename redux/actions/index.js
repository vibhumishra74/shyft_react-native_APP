

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
