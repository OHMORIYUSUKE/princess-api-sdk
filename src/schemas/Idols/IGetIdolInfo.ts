export type IGetIdolInfoArray = IGetIdolInfo[];

export enum TypeEnum {
  Princess = 1,
  Fairy = 2,
  Angel = 3,
  Ex = 5,
}

export interface IGetIdolInfo {
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

enum HandednessTypeIdEnum {
  _0 = 0,
  _1 = 1,
  _2 = 2,
}

enum HandednessTypeNameEnum {
  None = '設定なし',
  Right = '右',
  Left = '左',
}

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

enum BloodTypeIdEnum {
  _0 = 0,
  _1 = 1,
  _2 = 2,
  _3 = 3,
  _4 = 4,
}

enum BloodTypeNameEnum {
  None = '設定なし',
  A = 'A',
  B = 'B',
  AB = 'AB',
  O = 'O',
}

interface BloodType {
  id: BloodTypeIdEnum;
  name: BloodTypeNameEnum;
}

interface Measurements {
  bust: number;
  waist: number;
  hip: number;
}
