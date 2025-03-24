import { describe, test, expect, vi } from "vitest";
import { UserApi } from "../";
import { appAxios } from "../Axios";
import {
    AxiosRequestHeaders,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from "axios";
import { UserType } from "../../Types";

vi.mock("../Axios", () => ({
    appAxios: {
        get: vi.fn(),
    },
}));

const mockedAxios = appAxios as unknown as {
    get: ReturnType<typeof vi.fn>;
};

describe("UserApi - getUserFetch", () => {
    test("list of users", async () => {
        const mockUsers: UserType[] = [
            {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough",
                    zipcode: "92998-3874",
                    geo: {
                        lat: "-37.3159",
                        lng: "81.1496",
                    },
                },
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org",
                company: {
                    name: "Romaguera-Crona",
                    catchPhrase: "Multi-layered client-server neural-net",
                    bs: "harness real-time e-markets",
                },
            },
            {
                id: 2,
                name: "Ervin Howell",
                username: "Antonette",
                email: "Shanna@melissa.tv",
                address: {
                    street: "Victor Plains",
                    suite: "Suite 879",
                    city: "Wisokyburgh",
                    zipcode: "90566-7771",
                    geo: {
                        lat: "-43.9509",
                        lng: "-34.4618",
                    },
                },
                phone: "010-692-6593 x09125",
                website: "anastasia.net",
                company: {
                    name: "Deckow-Crist",
                    catchPhrase: "Proactive didactic contingency",
                    bs: "synergize scalable supply-chains",
                },
            },
        ];

        const mockConfig: InternalAxiosRequestConfig<unknown> = {
            headers: {} as AxiosRequestHeaders,
            method: "get",
            url: "",
            params: {},
            data: undefined,
            timeout: 0,
            xsrfCookieName: "",
            xsrfHeaderName: "",
            maxContentLength: undefined,
            maxBodyLength: undefined,
        };

        const mockResponse: AxiosResponse<UserType[]> = {
            data: mockUsers,
            status: 200,
            statusText: "OK",
            headers: {},
            config: mockConfig,
        };

        mockedAxios.get.mockResolvedValueOnce(mockResponse);
        const response = await UserApi.getUserFetch();
        expect(appAxios.get).toHaveBeenCalledWith("");
        expect(response).toEqual(mockResponse);
        expect(response.data).toEqual(mockUsers);
        console.log(response.data);
    });
});
