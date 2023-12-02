import { base_url } from "./baseUrl"
import { commonAPI } from "./commonAPI"

export const getTShirtAPI = async() => {
    return await commonAPI("GET", `${base_url}/products/category/men's%20clothing`, "", "")
}