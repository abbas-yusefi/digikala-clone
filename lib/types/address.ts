export type Address = {
  id: number;
  user_id: number;
  recipient_name: string;
  phone: number;
  street_address: string;
  street_address_2: string | null;
  city: string;
  state: string;
  postal_code: number;
  is_default: boolean;
  created_at: number;
  updated_at: number;
};
