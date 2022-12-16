export interface IResturant {
  resturantInfo: IData | null;
  seat: ISeat[] | null;
}

export interface ISeat {
  name: string;
  identity_id: number;
  id: number;
  is_active: boolean;
}
interface IData {
  name: string;
  identity_id: number;
  slug: string;
  id: number;
  logo_url: string;
}
