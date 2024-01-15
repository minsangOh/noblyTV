// types/OldUserInfo.ts
export interface Disease {
  // Disease 타입의 필드 정의
}

export interface Medication {
  // Medication 타입의 필드 정의
}

export interface FamilyUserInfo {
  // FamilyUserInfo 타입의 필드 정의
}

export interface UserInfo {
  id: number;
  userId: string;
  password: string;
  name: string;
  phoneNumber: string;
  diseases: Disease[];
  birth: string;
  medications: Medication[];
  familyMembers: FamilyUserInfo[];
}
