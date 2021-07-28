import axios, { AxiosInstance } from 'axios';
// import { LoadingModule } from '@/store/loading';
// import { UserModule } from '@/store/user';
import router from '@/router';

const server = axios.create({
  baseURL: 'https://api-dev-life-kr.herokuapp.com/',
  timeout: 20000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': 'kr;q=0.9',
  },
});

server.interceptors.request.use(
  config => {
    // if (config.url !== '/user/upload') LoadingModule.update_loading_to(true);
    // if (UserModule.token !== null) {
    //   config.headers.Authorization = `token=${UserModule.token}`;
    // }
    return config;
  },
  err => {
    // LoadingModule.update_loading_to(false);
    return Promise.reject(err);
  },
);
server.interceptors.response.use(
  ({ data, status }) => {
    // LoadingModule.update_loading_to(false);
    // if (status == 403) router.push({ path: '/login' });
    if (data.code) {
      // LoadingModule.error(data.msg);
      return Promise.reject(data);
    }
    return data;
  },
  err => {
    // LoadingModule.update_loading_to(false);
    // LoadingModule.error(`서비스 응답 오류/网络错误`);
    return Promise.reject(err);
  },
);

export abstract class Http {
  protected readonly uri: string;
  protected readonly server: AxiosInstance = server;

  constructor(uri: string) {
    this.uri = uri;
  }

  protected post<T = unknown>(
    data: any,
    uri = this.uri,
    config?: any,
  ): Promise<T> {
    return this.server.post(uri, data, config);
  }

  protected get<T = unknown>(params?: any, uri = this.uri): Promise<T> {
    return this.server.get(uri, { params });
  }

  protected put<T = unknown>(
    data: any,
    uri = `${this.uri}${data.id}/`,
  ): Promise<T> {
    return this.server.put(uri, data);
  }

  protected patch<T = unknown>(data: any, uri = this.uri): Promise<T> {
    return this.server.patch(uri, data);
  }
  protected delete<T = unknown>(id: number, uri = this.uri): Promise<T> {
    return this.server.delete(`${uri}${id}/`);
  }
  // protected export_excel<T = unknown>(
  //   params?: any,
  //   uri = this.uri,
  // ): Promise<T> {
  //   return this.server.get(uri, { params, responseType: 'blob' });
  // }
}
