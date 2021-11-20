import http from "./http-common";
import TokenData from "./token.type"

class HubService {
  getAll() {
    if (this)
      return http.get<Array<TokenData>>("/tokens");
    return null
  }

  get(id: string) {
    if (this)
      return http.get<TokenData>(`/tokens/${id}`);
    return null
  }

  create(data: TokenData) {
    if (this)
      return http.post<TokenData>("/tokens/index.php", data);
    return null
  }

  update(data: TokenData, id: any) {
    if (this)
      return http.put<any>(`/tokens/${id}`, data);
    return null
  }

  delete(id: any) {
    if (this)
      return http.delete<any>(`/tokens/${id}`);
    return null
  }

  deleteAll() {
    if (this)
      return http.delete<any>(`/tokens`);
    return null
  }

  findByTitle(title: string) {
    if (this)
      return http.get<Array<TokenData>>(`/tokens?title=${title}`);
    return null
  }
}

export default new HubService();