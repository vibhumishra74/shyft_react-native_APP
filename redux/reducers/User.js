const initialState = {
    userDetails:{},
    token:null,
    isLogedin:false,
    isEmailLogedin:false
}

export default (state = initialState, action) => {
    switch (action.type) {
      case "user_Detail":
        //   console.log("user_detail in redux",action.payload)
        return {
            ...state, userDetails:action.payload
        }
        case "SAVE_TOKEN":
            // console.log("token in redux",action.token)
            return { 
                ...state, token:action.token
            }
        case "Restore_TOKEN":
            // console.log("token in redux",action.token)
            return { 
                ...state, token:action.token
            }
        case "isUser_Logedin":
            // console.log("logedin in redux",action.payload)
            return { 
                isLogedin:action.payload
            }
        case "isEmail_Logedin":
            // console.log("logedin email in redux",action.payload)
            return { 
                isEmailLogedin:action.payload
            }
        default:
            return state;
    }
}