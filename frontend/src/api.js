import axios from 'axios';

// Create a wrapper around axios so we don't have to type
// {params: <parameter object>}
// for every api call
const AxiosAPI = {
    baseURL: 'http://localhost:5000/',

    get: function(url, params){
        return axios.get(this.baseURL + url, params)
    },

    post: function(url, params, headers){
        return axios.post(this.baseURL + url, params, headers)
    },

    patch: function(url, params, headers){
        return axios.patch(this.baseURL + url, params, headers)
    }
}

export default AxiosAPI