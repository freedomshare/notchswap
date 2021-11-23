import http from "./http-common";
import UserData from "./user.type"

class UserService {
  
  isExist(data: UserData) {
    const formData = new FormData;
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    
    if (this)
      return http.post<UserData>("/users/index.php", formData);
    return null
  }

}

export default new UserService();