export type Room = {
  id: number;
  roomName: string;
  description: string;
  creatorId: null | number;
  lat: string;
  long: string;
  location: string;
};

export type GetRooms = {
  room: Room;
  images: string[];
};
