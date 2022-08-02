import APIRequest from '../utils/config/axios.config'

export const getRandomJoke = () => {
    return APIRequest.get('/jokes/random', {
        validateStatus: function (status){
            return status < 500;
        }
    })
}
