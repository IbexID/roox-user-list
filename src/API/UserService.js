import axios from "axios"
export default class UserService {
    static async getAll(limit = 10){
            const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
            params: {
                _limit: limit
            }
            })
            return response
        }
}