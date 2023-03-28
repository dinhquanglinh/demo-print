// import axios from 'axios';
import axiosAuth from "@/services/axios";

class BaseService {
    get<T = unknown>(url: string, data?: unknown) {
        return axiosAuth.get(url, {
            data,
        });
    }

    post<T = unknown>(url: string, data: unknown) {
        return axiosAuth.post(url, data);
    }

    put<T = unknown>(url: string, data: unknown) {
        return axiosAuth.put(url, data);
    }

    delete<T = unknown>(url: string) {
        return axiosAuth.delete(url);
    }
}

export default BaseService;
