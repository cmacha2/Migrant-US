/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      profilePicture
      backgroundPicture
      email
      status
      notificationToken
      latitude
      longitude
      chatRooms {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          chatRoom {
            id
            isSeenBy
            participants {
              items {
                user {
                  id
                  email
                  firstName
                  lastName
                  profilePicture
                  notificationToken
                }
              }
            }
            lastMessage {
              content
              createdAt
            }
          }
        }
        nextToken
      }
      cases {
        items {
          id
          receiptNumber
          receiptDate
          titleCase
          description
          typeForm
          createdAt
          updatedAt
          userCasesId
        }
        nextToken
      }
      posts {
        items {
          id
          type
          content
          numberOfLikes
          likedBy
          createdAt
          updatedAt
          userPostsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        profilePicture
        backgroundPicture
        email
        status
        notificationToken
        latitude
        longitude
        chatRooms {
          nextToken
        }
        cases {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      isSeenBy
      messages {
        items {
          id
          chatRoomID
          content
          createdAt
          updatedAt
          chatRoomMessagesId
          messageAuthorId
        }
        nextToken
      }
      lastMessage {
        id
        chatRoomID
        author {
          id
          firstName
          lastName
          profilePicture
          backgroundPicture
          email
          status
          notificationToken
          latitude
          longitude
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageAuthorId
      }
      participants {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        isSeenBy
        messages {
          nextToken
        }
        lastMessage {
          id
          chatRoomID
          content
          createdAt
          updatedAt
          chatRoomMessagesId
          messageAuthorId
        }
        participants {
          nextToken
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      post {
        id
        type
        author {
          id
          firstName
          lastName
          profilePicture
          backgroundPicture
          email
          status
          notificationToken
          latitude
          longitude
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        content
        numberOfLikes
        likedBy
        createdAt
        updatedAt
        userPostsId
      }
      user {
        id
        firstName
        lastName
        profilePicture
        backgroundPicture
        email
        status
        notificationToken
        latitude
        longitude
        chatRooms {
          nextToken
        }
        cases {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userCommentsId
      postCommentsId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        post {
          id
          type
          content
          numberOfLikes
          likedBy
          createdAt
          updatedAt
          userPostsId
        }
        user {
          id
          firstName
          lastName
          profilePicture
          backgroundPicture
          email
          status
          notificationToken
          latitude
          longitude
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        userCommentsId
        postCommentsId
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      type
      author {
        id
        firstName
        lastName
        profilePicture
        backgroundPicture
        email
        status
        notificationToken
        latitude
        longitude
        chatRooms {
          nextToken
        }
        cases {
          nextToken
        }
        posts {
          nextToken
        }
         comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          userCommentsId
          postCommentsId
          user {
              id
              firstName
              lastName
              profilePicture
            }
        }
        nextToken
      }
      content
      numberOfLikes
      likedBy
      createdAt
      updatedAt
      userPostsId
    }
  }
`;

export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        author {
          id
          firstName
          lastName
          profilePicture
          backgroundPicture
          email
          status
          notificationToken
          latitude
          longitude
          createdAt
          updatedAt
        }
        comments {
          items {
            id
            content
            createdAt
            updatedAt
            postCommentsId
            userCommentsId
            user {
              firstName
              lastName
              profilePicture
            }
          }
          nextToken
        }
        content
        numberOfLikes
        likedBy
        createdAt
        updatedAt
        userPostsId
      }
      nextToken
    }
  }
`;
export const getCase = /* GraphQL */ `
  query GetCase($id: ID!) {
    getCase(id: $id) {
      id
      author {
        id
        firstName
        lastName
        profilePicture
        backgroundPicture
        email
        status
        notificationToken
        latitude
        longitude
        chatRooms {
          nextToken
        }
        cases {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      receiptNumber
      receiptDate
      titleCase
      description
      typeForm
      createdAt
      updatedAt
      userCasesId
    }
  }
`;
export const listCases = /* GraphQL */ `
  query ListCases(
    $filter: ModelCaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        author {
          id
          firstName
          lastName
          profilePicture
          backgroundPicture
          email
          status
          notificationToken
          latitude
          longitude
          createdAt
          updatedAt
        }
        receiptNumber
        receiptDate
        titleCase
        description
        typeForm
        createdAt
        updatedAt
        userCasesId
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      chatRoomID
      author {
        id
        firstName
        lastName
        profilePicture
        backgroundPicture
        email
        status
        notificationToken
        latitude
        longitude
        chatRooms {
          nextToken
        }
        cases {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
      chatRoomMessagesId
      messageAuthorId
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatRoomID
        author {
          id
          firstName
          lastName
          profilePicture
          backgroundPicture
          email
          status
          notificationToken
          latitude
          longitude
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageAuthorId
      }
      nextToken
    }
  }
`;
export const getNotification = /* GraphQL */ `
  query GetNotification($id: ID!) {
    getNotification(id: $id) {
      id
      receiver
      sender {
        id
        firstName
        lastName
        profilePicture
        backgroundPicture
        email
        status
        notificationToken
        latitude
        longitude
        chatRooms {
          nextToken
        }
        cases {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      type
      postID
      caseID
      chatRoomID
      isSeen
      createdAt
      updatedAt
      notificationSenderId
    }
  }
`;
export const listNotifications = /* GraphQL */ `
  query ListNotifications(
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotifications(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        receiver
        sender {
          id
          firstName
          lastName
          profilePicture
          backgroundPicture
          email
          status
          notificationToken
          latitude
          longitude
          createdAt
          updatedAt
        }
        type
        postID
        caseID
        chatRoomID
        isSeen
        createdAt
        updatedAt
        notificationSenderId
      }
      nextToken
    }
  }
`;
export const getUserChatRooms = /* GraphQL */ `
  query GetUserChatRooms($id: ID!) {
    getUserChatRooms(id: $id) {
      id
      userID
      chatRoomID
      user {
        id
        firstName
        lastName
        profilePicture
        backgroundPicture
        email
        status
        notificationToken
        latitude
        longitude
        chatRooms {
          nextToken
        }
        cases {
          nextToken
        }
        posts {
          nextToken
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        isSeenBy
        messages {
          nextToken
        }
        lastMessage {
          id
          chatRoomID
          content
          createdAt
          updatedAt
          chatRoomMessagesId
          messageAuthorId
        }
        participants {
          nextToken
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUserChatRooms = /* GraphQL */ `
  query ListUserChatRooms(
    $filter: ModelUserChatRoomsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        chatRoomID
        user {
          id
          firstName
          lastName
          profilePicture
          backgroundPicture
          email
          status
          notificationToken
          latitude
          longitude
          createdAt
          updatedAt
        }
        chatRoom {
          id
          isSeenBy
          createdAt
          updatedAt
          chatRoomLastMessageId
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const postsByDate = /* GraphQL */ `
  query PostsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        author {
          id
          firstName
          lastName
          profilePicture
          backgroundPicture
          email
          status
          notificationToken
          latitude
          longitude
          createdAt
          updatedAt
        }
        comments {
          items {
            id
            content
            createdAt
            updatedAt
            postCommentsId
            userCommentsId
            user {
              id
              firstName
              lastName
              email
              profilePicture
            }
          }
          nextToken
        }
        content
        numberOfLikes
        likedBy
        createdAt
        updatedAt
        userPostsId
      }
      nextToken
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoom(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomID
        author {
          id
          firstName
          lastName
          profilePicture
          backgroundPicture
          email
          status
          notificationToken
          latitude
          longitude
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageAuthorId
      }
      nextToken
    }
  }
`;
export const notificationsByUserID = /* GraphQL */ `
  query NotificationsByUserID(
    $receiver: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    notificationsByUserID(
      receiver: $receiver
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        receiver
        sender {
          id
          firstName
          lastName
          profilePicture
          backgroundPicture
          email
          status
          notificationToken
          latitude
          longitude
          createdAt
          updatedAt
        }
        type
        postID
        caseID
        chatRoomID
        isSeen
        createdAt
        updatedAt
        notificationSenderId
      }
      nextToken
    }
  }
`;
