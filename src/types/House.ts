export interface HouseInterface {
  id?: number;
  houseName: string;
  numberOfRooms: number;
  builtDate: Date;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;
  distance?: number;
}
