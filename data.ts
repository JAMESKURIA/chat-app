import { IChat } from "./types/chat.d";

export const chats: IChat[] = [
  {
    id: 1,
    user: {
      profile: require("./assets/profile1.jpg"),
      name: "John Doe",
      messages: [
        {
          id: 1,
          text: "I am at the spot, behind the shop",
          time: "50 mins ago",
        },
        {
          id: 2,
          text: "lorem ipsum dolor sit amet conseqeteur",
          time: "50 mins ago",
        },
        {
          id: 3,
          text: "lorem ipsum dolor sit amet conseqeteur",
          time: "50 mins ago",
        },
      ],
    },
  },
  {
    id: 2,
    user: {
      profile: require("./assets/profile2.jpg"),
      name: "Jane Doe",
      messages: [
        {
          id: 1,
          text: "I have sent it to your mum, How is she?",
          time: "Nov 18",
        },
        {
          id: 2,
          text: "lorem ipsum dolor sit amet conseqeteur",
          time: "50 mins ago",
        },
        {
          id: 3,
          text: "lorem ipsum dolor sit amet conseqeteur",
          time: "50 mins ago",
        },
      ],
    },
  },
  {
    id: 3,
    user: {
      profile: require("./assets/profile3.jpg"),
      name: "Jane Smith",
      messages: [
        {
          id: 1,
          text: "Can you help with my project work?",
          time: "Nov 2",
        },
        {
          id: 2,
          text: "lorem ipsum dolor sit amet conseqeteur",
          time: "50 mins ago",
        },
        {
          id: 3,
          text: "lorem ipsum dolor sit amet conseqeteur",
          time: "50 mins ago",
        },
      ],
    },
  },
];
