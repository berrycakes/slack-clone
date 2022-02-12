import axios from "axios";

const headers = JSON.parse(sessionStorage.getItem("userLoggedInDetails"));

const axiosFetch = headers
  ? axios.create({
      baseURL: `${process.env.REACT_APP_AVION_SLACK_API}`,
      headers: {
        "access-token": headers["access-token"],
        client: headers["client"],
        expiry: headers["expiry"],
        uid: headers["uid"],
      },
    })
  : null;

export const getAllUsers = async () => {
  try {
    const response = await axiosFetch.get("/api/v1/users/");
    return response;
  } catch (error) {
    return error;
  }
};

export const channelsGet = async () => {
  try {
    const response = await axiosFetch.get("/api/v1/channels");
    return response;
  } catch (error) {
    return error;
  }
};

export const getRecentDms = async () => {
  try {
    const response = await axiosFetch.get("/api/v1/users/recent/");
    return response;
  } catch (error) {
    return error;
  }
};

export const searchUser = async (searchString) => {
  try {
    const response = await axiosFetch.get("/api/v1/users/");
    const userList = await response.data.data;
    const filteredUsers = await userList.filter((user) =>
      user.email.includes(searchString)
    );
    return filteredUsers;
  } catch (error) {
    return error;
  }
};

export const getInteractedUsers = async ({ token, client, expiry, uid }) => {
  return axios
    .get("http://206.189.91.54//api/v1/users/recent/", {
      headers: {
        "access-token": token,
        client: client,
        expiry: expiry,
        uid: uid,
      },
    })
    .then((response) => response)
    .then((result) => result)
    .catch((error) => error);
};
