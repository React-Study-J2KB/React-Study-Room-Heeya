export interface CreateInventoryRequest {
    title: string,
    description: string
}

export interface InventoryResponse {
    id: Number,
    title: string,
    description: string,
    createdAt: string,
}

export interface ListInventoryResponse {
    list: InventoryResponse[]
}