export interface CreateUserRequest {
    email: string,
    nickname: string,
    password: string
}

export interface LoginUserRequest {
    email: string,
    password: string
}