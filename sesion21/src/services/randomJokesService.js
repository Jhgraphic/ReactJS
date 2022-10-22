import APIRequest from '../utils/config/randomJokes.config';

export function getRandomJoke() {
    return APIRequest.get('/', {
        validateStatus: function (status) {
            return status < 500;
        }
    })
}