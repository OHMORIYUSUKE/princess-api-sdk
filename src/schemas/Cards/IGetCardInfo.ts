export type IGetCardInfoArray = IGetCardInfo[];

export type IGetCardInfo = {
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
};

type Costumes = {
  default: Default;
  bonus: Bonus;
};

type Default = {
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
};

type Bonus = {
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
};

type Parameters = {
  vocal: Vocal;
  dance: Dance;
  visual: Visual;
  lvMax: LvMax;
  life: Life;
};

type Vocal = {
  base: number;
  beforeAwakened: BeforeAwakened;
  afterAwakened: AfterAwakened;
  masterBonus: number;
};

type BeforeAwakened = {
  diff: number;
  max: number;
};

type AfterAwakened = {
  diff: number;
  max: number;
};

type Dance = {
  base: number;
  beforeAwakened: BeforeAwakened2;
  afterAwakened: AfterAwakened2;
  masterBonus: number;
};

type BeforeAwakened2 = {
  diff: number;
  max: number;
};

type AfterAwakened2 = {
  diff: number;
  max: number;
};

type Visual = {
  base: number;
  beforeAwakened: BeforeAwakened3;
  afterAwakened: AfterAwakened3;
  masterBonus: number;
};

type BeforeAwakened3 = {
  diff: number;
  max: number;
};

type AfterAwakened3 = {
  diff: number;
  max: number;
};

type LvMax = {
  beforeAwakened: number;
  afterAwakened: number;
};

type Life = {
  beforeAwakened: number;
  afterAwakened: number;
};

type CenterEffect = {
  id: number;
  name: string;
  description: string;
  idolType: number;
  specificIdolType: number;
  songType: number;
  attributes: number[];
  values: number[];
};

type Skill = {
  id: number;
  effectId: number;
  duration: number;
  interval: number;
  probability: number;
  evaluationTypes: any[];
  values: number[];
  description: string;
};

type Lines = {
  flavor: Flavor;
  contact: Contact;
  awakening: string;
};

type Flavor = {
  beforeAwakened: string;
  afterAwakened: string;
};

type Contact = {
  beforeAwakened: string;
  afterAwakened: string;
};

type Event = {
  id: number;
  type: number;
  appealType: number;
  name: string;
  schedule: Schedule;
  item: Item;
};

type Schedule = {
  beginAt: string;
  endAt: string;
  pageOpenedAt: string;
  pageClosedAt: string;
  boostBeginAt: string;
  boostEndAt: string;
};

type Item = {
  name: string;
  shortName: string;
};
