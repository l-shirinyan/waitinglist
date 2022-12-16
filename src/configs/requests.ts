import axios, { AxiosError } from "axios";

export const apiRequest = async (
  url?: string,
  method = "GET",
  body?: object,
  headers?: object
) => {
  try {
    const { data } = await axios({
      method,
      url: url,
      headers,
      data: body,
    });

    return data;
  } catch (e: unknown) {
    const error = e as AxiosError;
    console.log(error);
    
    // throw new Error(error?.message || "Something went wrong");
  }
};
