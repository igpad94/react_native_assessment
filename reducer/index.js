import { READ_QR } from "../actions/types";

const qrData = [];

export default function rootReducer(state = qrData, action) {
    switch (action.type) {
        case READ_QR:
            return [...state, payload]    
        default:
            return state;        
    }
}