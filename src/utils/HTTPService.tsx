import Axios, { AxiosResponse, AxiosRequestConfig } from "axios";

export namespace HTTPService
{
    // const baseURL: string = "https://api.mrpv4.aiji.kr/api/v1/partners/kt";
    // const baseURL: string = "http://localhost:8080";
    const baseURL: string = "";

    export function get<T>(url: string, headers: any = null): Promise<T>
    {
        let request: AxiosRequestConfig =
        {
            method: "GET",
            url: baseURL + url
        };
        return _axios(request, headers);
    }

    export function post<T>(url: string, data: any, headers: any = null): Promise<T>
    {
        let request: AxiosRequestConfig =
        {
            method: "POST",
            url: baseURL + url,
            data: data
        };
        return _axios(request, headers);
    }

    export function remove<T>(url: string, headers: any = null): Promise<T>
    {
        let request: AxiosRequestConfig =
        {
            method: "DELETE",
            url: baseURL + url
        };
        return _axios(request, headers);
    }

    // 부분교체
    export function patch<T>(url: string, data: any, headers: any = null): Promise<T>
    {
        let request: AxiosRequestConfig =
        {
            method: "PATCH",
            url: baseURL + url,
            data: data
        };
        return _axios(request, headers);
    }

    // 전원 교체
    export function put<T>(url: string, data: any, headers: any = null): Promise<T>
    {
        let request: AxiosRequestConfig =
        {
            method: "PUT",
            url: baseURL + url,
            data: data
        };
        return _axios(request, headers);
    }

    async function _axios<T>(request: AxiosRequestConfig, headers: any = null): Promise<T>
    {
        if (headers)
            request.headers = headers;

        let response: AxiosResponse = await Axios.request(request);

        if (response.status !== 200)
            throw new Error("HTTP Error");
        
        try
        {
            return response.data;
        }
        catch (err)
        {
            console.log(err);
        }
    }
}