export { default } from "next-auth/middleware";
export const config = {
  mathcher: ["trips", "/reservations", "/properties", "/favorites"],
};