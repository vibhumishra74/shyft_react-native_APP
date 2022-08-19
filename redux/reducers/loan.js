const initialState = {
    customservice:[]
}
export default (state = initialState, action) => {
    switch (action.type) {
            case "enquery":
                return {

                ...state,
                customservice:[
                    ...state.customservice,
                    action.payload
                ],
                // log:console.log('redux cutomer_loan',action.payload,'state >>>',state.customservice)
            }
        default:
            return state;
    }
}
