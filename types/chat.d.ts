export interface Imessage {
  id: number;
  text: string;
  time: string;
}

export interface IChat {
  id: number;
  user: {
    profile: any;
    name: string;
    messages: Imessage[];
  };
}
