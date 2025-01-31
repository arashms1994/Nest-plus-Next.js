import { auth } from "@/lib/session";

export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public body?: { errors: any }
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export const apiFetch = async <T>(
  url: string,
  options?: RequestInit
): Promise<T> => {
  const { accessToken } = await auth().catch(() => ({ accessToken: "" }));
  console.log(accessToken)
  const headers = {
    "Content-Type": "application/json",
    ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    ...options?.headers,
  };

  const res = await fetch(url, {
    ...options,
    headers,
  });
  if (!res.ok) {
    const errorBody = await res.json().catch(() => null);
    throw new ApiError(res.status, res.statusText, errorBody);
  }
  return res.json();
};
