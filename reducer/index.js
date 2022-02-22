import { READ_QR } from "../actions/types";

const initialState = {
    qrData : []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case READ_QR:
            return {
                ...state,
                qrData: state.qrData.concat(action.payload)
            }
        default:
            return state;        
    }
}