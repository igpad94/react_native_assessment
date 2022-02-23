import { READ_QR, FILTER_DATA, CLEAR_FILTER, DELETE_QR } from "../actions/types";

const initialState = {
    qrData : [],
    filteredData: []
};

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case READ_QR:
            return {
                ...state,
                qrData: state.qrData.concat(action.payload),
                filteredData: state.filteredData.concat(action.payload),
            }
        case FILTER_DATA:
            return {
                ...state,
                filteredData: state.qrData.filter(e => e.title.toLowerCase().includes(action.payload.toLowerCase()))
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filteredData: state.qrData
            }
        case DELETE_QR:
            return {
                ...state,
                filteredData: state.qrData.filter(e => e.id !== action.payload),
                qrData: state.qrData.filter(e => e.id !== action.payload)
            }
        default:
            return state;        
    }
}