const initialState = {
    userDetails:{},
    token:null,
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
        default:
            return state;
    }
}