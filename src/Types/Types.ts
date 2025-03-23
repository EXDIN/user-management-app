type UserComnpanyType = {
    name: string;
    catchPhrase: string;
    bs: string;
};

type UserGeoType = {
    lat: string;
    lng: string;
};

type UserAddtessType = {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: UserGeoType;
};

export type UserType = {
    id: number;
    name: string;
    username?: string;
    email: string;
    address?: UserAddtessType;
    phone: string;
    website?: string;
    company?: UserComnpanyType;
};
