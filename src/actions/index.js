import { CAPTURE_USERS } from "./types";

export function captureUsers(data) {
  return {
    type: CAPTURE_USERS,
    payload: data
  };
}
