import axios, { AxiosInstance } from "axios"
import { product } from "../entities/product.entity"

export class ClientApi {
  private _http: AxiosInstance

  constructor() {
    this._http = axios.create({
      // baseURL: 'http://localhost:3000'
      baseURL: 'http://192.168.0.43:3000'
    })
  }

  async getListProducts(): Promise<product[] | undefined> {
    try {
      const response = await this._http.get('/products')

      return response.data
    } catch (error) {
      throw new Error(String(error))
    }
  }
}