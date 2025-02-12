import { IUser } from "@/type/serverTypes";

export function chooseAuthRedirectPath(role: IUser["role"] | undefined) {
  switch (role) {
    case 1:
      return "/";
    case 2:
      return "/seller/dashboard";
    case 3:
      return "/admin/dashboard";
    default:
      return "/auth/login";
  }
}