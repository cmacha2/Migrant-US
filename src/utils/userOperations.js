import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "../graphql/queries";
import {
  updateUser,
  deleteUser as deleteUserMutation,
  createChatRoom,
  createUserChatRooms,
} from "../graphql/mutations";
import { listUsers } from "../graphql/queries";
import { listInfoUsers } from "../../graphqlCustom/listInfoUsers";

export const updateUserPicture = async (userID, newPhoto) => {
  try {
    await API.graphql({
      query: updateUser,
      variables: {
        input: {
          id: userID,
          profilePicture: newPhoto,
        },
      },
    });
    console.log("profile picture updated");
  } catch (e) {
    console.log("error updating user photo");
  }
};

export const updateUserStatus = async (userID, newStatus) => {
  try {
    await API.graphql({
      query: updateUser,
      variables: {
        input: {
          id: userID,
          status: newStatus,
        },
      },
    });
    console.log("user status updated");
  } catch (e) {
    console.log("error updating user status");
  }
};

export const updateUserFirstName = async (userID, newFirstName) => {
  try {
    await API.graphql({
      query: updateUser,
      variables: {
        input: {
          id: userID,
          firstName: newFirstName,
        },
      },
    });
    console.log("user firstName updated");
  } catch (e) {
    console.log("error updating user firstName");
  }
};

export const updateUserLastName = async (userID, newLastName) => {
  try {
    await API.graphql({
      query: updateUser,
      variables: {
        input: {
          id: userID,
          lastName: newLastName,
        },
      },
    });
    console.log("user lastName updated");
  } catch (e) {
    console.log("error updating user lastName");
  }
};

export const updateUserNotificationToken = async (userID, newToken) => {
  try {
    await API.graphql({
      query: updateUser,
      variables: {
        input: {
          id: userID,
          notificationToken: newToken,
        },
      },
    });
    console.log("user push notification token updated");
  } catch (e) {
    console.log("error updating user notification token");
  }
};

export const updateUserLocation = async (userID, location) => {
  const { latitude, longitude } = location;
  try {
    await API.graphql({
      query: updateUser,
      variables: {
        input: {
          id: userID,
          latitude: latitude,
          longitude: longitude,
        },
      },
    });
    console.log("user push location updated");
  } catch (e) {
    console.log("error updating user location");
  }
};

export const deleteUser = async (userID) => {
  try {
    await API.graphql({
      query: deleteUserMutation,
      variables: {
        input: {
          id: userID,
        },
      },
    });
    console.log("user deleted successfully");
  } catch (e) {
    console.log("error deleting user");
  }
};

export const getUserByID = async (ID) => {
  try {
    const { data } = await API.graphql(
      graphqlOperation(getUser, {
        id: ID,
      })
    );
    if (data.getUser) {
      return data.getUser;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getUserByEmail = async (email) => {
  try {
    const { data } = await API.graphql({
      query: listUsers,
      variables: {
        filter: {
          email: {
            eq: email,
          },
        },
      },
    });
    if (data.listUsers.items) {
      return data.listUsers.items[0];
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};



export const listAllUsers = async () => {
  try {
    const { data } = await API.graphql({
      query: listInfoUsers,
      
    });
    if (data.listUsers.items) {
      return data.listUsers.items;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};

export const createNewChatRoom = async () => {
  try {
    const { data } = await API.graphql({
      query: createChatRoom,
      variables: {
        input: {
          chatRoomLastMessageId: "",
          isSeenBy: [],
        },
      },
    });
    if (data.createChatRoom) {
      return data.createChatRoom.id;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
};

export const addUserToChatRoom = async (userID, chatRoomID) => {
  try {
    await API.graphql({
      query: createUserChatRooms,
      variables: {
        input: {
          userID: userID,
          chatRoomID: chatRoomID,
        },
      },
    });
    return true;
  } catch (e) {
    console.log(e);
  }
};
