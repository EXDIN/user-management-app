import { AxiosResponse } from "axios";
import { appAxios } from "../Axios";
import { UserType } from "../../Types";

export interface UserApiInterface {
    getUserFetch(): Promise<AxiosResponse<UserType[]>>;
    deleteUserFetch(id: number): void;
    addUserFetch(data: UserType): void;
    editUserFetch(data: UserType): void;
}

class UserApi implements UserApiInterface {
    async getUserFetch() {
        return await appAxios.get<UserType[]>("");
    }

    async deleteUserFetch(id: number) {
        await appAxios.delete(`/${id}`);
    }

    async addUserFetch(data: UserType) {
        await appAxios.post("", { data });
    }

    async editUserFetch(data: UserType) {
        await appAxios.put(`/${data.id}`, { data });
    }
}

export default new UserApi();
