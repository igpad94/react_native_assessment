import {
  READ_QR, FILTER_DATA, CLEAR_FILTER, DELETE_QR,
} from './types';

let qrId = 0;

export function readQr(payload) {
  return {
    type: READ_QR,
    payload: {
      title: payload,
      id: qrId++,
    },
  };
}
export function filterData(payload) {
  return {
    type: FILTER_DATA,
    payload,
  };
}
export function clearFilter() {
  return {
    type: CLEAR_FILTER,
  };
}
export function deleteQR(payload) {
  return {
    type: DELETE_QR,
    payload,
  };
}
