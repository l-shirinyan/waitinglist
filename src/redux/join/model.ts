export interface IJoinState {
  joinValue: IJoinValue | null;
  isJoined: IIsJoined | null;
  terms: null | string;
}

export interface IJoinValue {
  name?: string;
  phoneNumber?: string;
  guests?: number;
  seat?: string;
  request?: string;
}

export interface IIsJoined {
  added_on: string;
  formated_order_in_queue: string;
  guest_count: number;
  guest_name: string;
  id: number;
  identity_id: number;
  order_in_queue: number;
  phone_number: string;
  request: string;
  seating_name: string;
  status: string;
}
