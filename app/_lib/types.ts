export interface MemberDataType {
  id: number;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  gender: string;
  city: string;
}

export interface BookingsDataType {
  id: number;
  created_at: string;
  date: string;
  status: string;
  trainerId: number;
  memberId: number;
  trainers: {
    name: string;
  };
}
