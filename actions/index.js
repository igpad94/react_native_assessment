import { READ_QR } from "./types";

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