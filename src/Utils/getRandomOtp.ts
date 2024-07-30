import { nanoid } from "nanoid";
export function getRandomOtp() {
  return nanoid(6);
}
