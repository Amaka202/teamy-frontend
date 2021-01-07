
export const checkToken = () => {
        const token = window.localStorage.getItem('token')
        if(token){
            return token;
        }
    }