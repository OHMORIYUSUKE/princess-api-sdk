export type IGetIdolInfoArray = IdolInfo[];
export type IGetIdolInfo = IdolInfo;

type TypeEnum = 1 | 2 | 3 | 5;

interface IdolInfo {
  id: number;
  sortId: number;
  resourceId: string;
  type: TypeEnum;
  fullName: string;
  displayName: string;
  lastName: string;
  firstName: string | null;
  alphabetName: string;
  fullNameRuby: string;
  age: number | null;
  birthplace: Birthplace;
  handednessType: HandednessType;
  height: number;
  weight: number;
  hobby: string;
  speciality: string;
  favorites: string;
  cv: string;
  colorCode: string;
  birthday: Birthday;
  constellation: Constellation;
  bloodType: BloodType;
  measurements: Measurements;
}

interface Birthplace {
  id: number;
  name: string;
}

type HandednessTypeIdEnum = 0 | 1 | 2;
type HandednessTypeNameEnum = '右' | '左' | '設定なし';

interface HandednessType {
  id: HandednessTypeIdEnum;
  name: HandednessTypeNameEnum;
}

interface Birthday {
  month: number;
  day: number;
}

interface Constellation {
  id: number;
  name: string;
}

type BloodTypeIdEnum = 0 | 1 | 2 | 3 | 4;
type BloodTypeNameEnum = '設定なし' | 'A' | 'B' | 'AB' | 'O';

interface BloodType {
  id: BloodTypeIdEnum;
  name: BloodTypeNameEnum;
}

interface Measurements {
  bust: number;
  waist: number;
  hip: number;
}
