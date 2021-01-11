// import { Route, Redirect } from "react-router-dom";

const api = "https://teamy-api.herokuapp.com/api/v1/signup";


async function signupFunc(arr, props ) {
    try {
        const userObj = {
            firstname: arr.firstname,
            lastname: arr.lastname,
            username: arr.username,
            email: arr.email,
            password: arr.password,
            gender: arr.gender,
            jobrole: arr.jobrole,
            location: arr.location
        }

        const response = await (await fetch(api, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userObj)
        })).json();

        console.log(response);
        if(response.message === "user sign up successful"){
            props.history.push('/posts')
        }else{
            setTimeout(() => {
                alert(response.message)
            }, 200)
        }
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default signupFunc;
