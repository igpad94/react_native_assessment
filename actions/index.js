import { READ_QR } from "./types";

export function readQr(payload) {
    return {
        type: READ_QR,
        payload
    }
}