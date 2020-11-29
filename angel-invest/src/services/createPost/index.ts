import { API } from "../api";

/**
 * @NETWORK_REQUEST
 * Makes a post request to create a post.
 */

const createPost = (formData: any) => {
    const { token } = formData;
    console.log(`${JSON.stringify(formData)} and token: ${JSON.stringify(token)} ===> Form Data sent to create`);
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return API.post("post/create", formData)
}

export { createPost }