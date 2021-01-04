const api = "http://localhost:5001/api/v1/signup";

async function signupFunc(arr) {
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
        return response;
    } catch (error) {
        console.log(error);
    }
}

export default signupFunc;
