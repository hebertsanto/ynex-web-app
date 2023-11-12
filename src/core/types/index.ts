export type FormData = {
    name: string,
    email: string,
    cep: string,
    address: string,
    phoneNumber: string,
}

export type Client = {
    _id:string,
    address: string,
    cep: string,
    email: string
    name: string,
    phoneNumber: string,
    cpf:string,
    rg:string
 }
 //eslint-disable-next-line
export type Navigate = (to: string) => void;

export type ButtonStyleProp = {
    bgColor: string;
    color: string;
    border: string;
    hover?: string;
    borderHover?: string;
};
