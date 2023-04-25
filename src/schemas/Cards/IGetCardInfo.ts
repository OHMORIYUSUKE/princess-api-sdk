export type IGetCardInfoArray = CardInfo[];
export type IGetCardInfo = CardInfo;

interface CardInfo {
  id: number;
  name: string;
  sortId: number;
  idolId: number;
  idolType: number;
  variation: number;
  rarity: number;
  resourceId: string;
  exType: number;
  category: number;
  costumes: Costumes;
  masterRankMax: number;
  skillLvMax: number;
  parameters: Parameters;
  centerEffect: CenterEffect;
  skillName: string;
  skills: Skill[];
  lines: Lines;
  addedAt: string;
  event: Event;
}

interface Costumes {
  default: Default;
  bonus: Bonus;
}

interface Default {
  id: number;
  sortId: number;
  name: string;
  description: string;
  resourceId: string;
  modelId: string;
  costumeGroupId: number;
  collaborationNumber: number;
  defaultHairstyle: number;
  releasedAt: Date;
}

interface Bonus {
  id: number;
  sortId: number;
  name: string;
  description: string;
  resourceId: string;
  modelId: string;
  costumeGroupId: number;
  collaborationNumber: number;
  defaultHairstyle: number;
  releasedAt: Date;
}

interface Parameters {
  vocal: Vocal;
  dance: Dance;
  visual: Visual;
  lvMax: LvMax;
  life: Life;
}

interface Vocal {
  base: number;
  beforeAwakened: BeforeAwakened;
  afterAwakened: AfterAwakened;
  masterBonus: number;
}

interface BeforeAwakened {
  diff: number;
  max: number;
}

interface AfterAwakened {
  diff: number;
  max: number;
}

interface Dance {
  base: number;
  beforeAwakened: BeforeAwakened2;
  afterAwakened: AfterAwakened2;
  masterBonus: number;
}

interface BeforeAwakened2 {
  diff: number;
  max: number;
}

interface AfterAwakened2 {
  diff: number;
  max: number;
}

interface Visual {
  base: number;
  beforeAwakened: BeforeAwakened3;
  afterAwakened: AfterAwakened3;
  masterBonus: number;
}

interface BeforeAwakened3 {
  diff: number;
  max: number;
}

interface AfterAwakened3 {
  diff: number;
  max: number;
}

interface LvMax {
  beforeAwakened: number;
  afterAwakened: number;
}

interface Life {
  beforeAwakened: number;
  afterAwakened: number;
}

interface CenterEffect {
  id: number;
  name: string;
  description: string;
  idolType: number;
  specificIdolType: number;
  songType: number;
  attributes: number[];
  values: number[];
}

interface Skill {
  id: number;
  effectId: number;
  duration: number;
  interval: number;
  probability: number;
  evaluationTypes: any[];
  values: number[];
  description: string;
}

interface Lines {
  flavor: Flavor;
  contact: Contact;
  awakening: string;
}

interface Flavor {
  beforeAwakened: string;
  afterAwakened: string;
}

interface Contact {
  beforeAwakened: string;
  afterAwakened: string;
}

interface Event {
  id: number;
  type: number;
  appealType: number;
  name: string;
  schedule: Schedule;
  item: Item;
}

interface Schedule {
  beginAt: string;
  endAt: string;
  pageOpenedAt: string;
  pageClosedAt: string;
  boostBeginAt: string;
  boostEndAt: string;
}

interface Item {
  name: string;
  shortName: string;
}
