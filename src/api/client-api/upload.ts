"use client";
import { AxiosRequestConfig } from "axios";
import Axios from "./base";
import { SuccessFileUploadResponse } from "@/type/serverTypes";

export async function upload(body: FormData, config: AxiosRequestConfig) {
  const res = await Axios.post<SuccessFileUploadResponse>(
    "/images",
    body,
    config
  );
  return res;
}
