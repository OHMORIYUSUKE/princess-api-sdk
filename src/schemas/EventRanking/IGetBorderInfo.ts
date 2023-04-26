export type IGetBorderInfo = {
  eventPoint?: number[];
  highScore?: number[];
  highScore2?: number[];
  highScoreTotal?: number[];
  loungePoint?: number[];
  idolPoint: IdolPoint[];
};

type IdolPoint = {
  idolId: number;
  borders: number[];
};
