export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users');

    return response.json()
}

export const getAllPagedUser = async (page = 1) => {
    let response = await fetch(`https://reqres.in/api/users?page=${page}`);

    return response.json()
}

export const getUserDetails = async (id) => {
    let response = await fetch(`https://reqres.in/api/users/${id}`);

    return response.json()
}

export const login = async (email, password) => {

    let body = {
        email: email, password: password
    }
    console.log(body)
    let response = await fetch(`https://reqres.in/api/login`, {
        method: 'POST',
        body: body
        // mode: 'no-cors',
        // credentials: 'omit',
        // cache: 'no-cache',
        // headers: {
        //     'Content-type': 'application/json'
        // },
    
    });

    return response.json();

}