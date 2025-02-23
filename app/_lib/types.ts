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

export interface PurchasedMembershipsTypes {
  id: number;
  created_at: string;
  startDay: string;
  endDay: string;
  memberId: number;
  gymMembershipId: number;
  isValid: boolean;
  price: number;
  gymMembership: { gymMembershipName: string };
}

export interface HoursTypes {
  openHour: string;
  closeHour: string;
}

export interface ScheduleTypes {
  id: number;
  created_at: string;
  name: string;
  trainerId: number;
  numOfPlaces: number;
  date: string;
  trainers: {
    name: string;
  };
}

export interface BookingTypes {
  id: number;
  created_at: string;
  date: string;
  status: string;
  trainerId: number;
  memberId: number;
}

export interface TrainerTypes {
  id: number;
  created_at: string;
  name: string;
  category: string;
  price: number;
  phone: string;
  image: string;
}

export interface GymMembershipTypes {
  id: number;
  created_at: string;
  gymMembershipName: string;
  price: number;
}
