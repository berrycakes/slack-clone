import axios from 'axios';

// Axios baseURL configuration
export const baseUrl = axios.create({
    baseURL: `${process.env.REACT_APP_AVION_SLACK_API}`
})

// User Registration Functionality`
export const userRegistration = async ({email, password, password_confirmation}) => {
    try {
        const response =  await baseUrl.post('/api/v1/auth/', {
            email, password, password_confirmation
        })
        return response;
    } catch (error) {
        return error;
    }
}

// User Login Functionality
export const userLogin = async ({email, password}) => {
    try {
        const response = await baseUrl.post('/api/v1/auth/sign_in', {
            email, password
        })
        return response;
    } catch (error) {
        return error;
    }
}