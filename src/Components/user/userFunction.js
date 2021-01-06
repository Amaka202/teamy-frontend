import {checkToken} from "../checkToken";
const api = 'https://teamy-api.herokuapp.com/api/v1/user';


export const fetchUser = () => {
    fetch(api, {
        method: "GET",
        headers: {
            "content-type" : "application/json",
            Authorization: `Bearer ${checkToken()}`
        }
    })
        .then(res => res.json())
        .then(data => data)
        .catch(err => err);    
}