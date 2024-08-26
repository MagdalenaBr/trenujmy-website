// export { auth as middleware } from "@/app/_lib/auth";
export { default } from "next-auth/middleware"

export const config = { matcher: ["/user/profile", "/user/bookings"] }
