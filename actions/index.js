import { READ_QR, FILTER_DATA, CLEAR_FILTER } from "./types";

let qrId = 0

export function readQr(payload) {
    return {
        type: READ_QR,
        payload:{
            title: payload,
            id: qrId++
        }
    }
}
export function filterData(payload) {
    return {
        type: FILTER_DATA,
        payload
    }
}
export function clearFilter() {
    return {
        type: CLEAR_FILTER,
    }
}