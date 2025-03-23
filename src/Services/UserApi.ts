import { AxiosResponse } from "axios";
import { appAxios } from ".";
import { UserType } from "../Types";

class UserApi {
    async getUserFetch(): Promise<AxiosResponse<UserType[]>> {
        return await appAxios.get<UserType[]>("");
    }
    async deleteUserFetch(id: number) {
        await appAxios.delete(`/${id}`);
    }
    async addUserFetch(data: UserType) {
        await appAxios.post("", { data });
    }
    async editUserFetch(data: UserType) {
        await appAxios.patch(`/${data.id}`, { data });
    }
}

export default new UserApi();
