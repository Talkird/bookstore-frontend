export const getToken = () => {
    return localStorage.getItem("token");
};

export const setToken = (token) => {
    localStorage.setItem("token", token);
}

export const getRole = () => {
    return localStorage.getItem("role");
}

export const setRole = (role) => {
    localStorage.setItem("role", role);
}

export const getEmail = () => {
    return localStorage.getItem("email");
}

export const setEmail = (email) => {
    localStorage.setItem("email", email);
}

export const setUserId = (userId) => {
    localStorage.setItem("userId", userId);
    
};

export const getUserId = () => {
    return localStorage.getItem("userId");
};
