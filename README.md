# princess-api-sdk

> TypeScript SDK at https://api.matsurihi.me/docs/.

[https://api.matsurihi.me/docs/](https://api.matsurihi.me/docs/)の API クライアントです。未実装のエンドポイントがあります。PR 待ってます。

## インストール

```bash
npm install princess-api-sdk
```

## 使い方

### 最新のアプリ・アセットバージョンの取得

```ts
import { PrincessApiSdk } from 'princess-api-sdk';

const princessApiSdk = new PrincessApiSdk();
const response = await princessApiSdk.getLatestAppAssetVersion();
```

`response`の値

```json
{
  "app": {
    "version": "5.1.050",
    "updatedAt": "2022-11-26T12:00:00+09:00",
    "revision": 749332
  },
  "asset": {
    "version": 773000,
    "updatedAt": "2022-11-26T12:00:00+09:00",
    "indexName": "41f0f6c8d80bc95f405c66875a0b1308b6e67443.data"
  }
}
```

### アプリバージョンの取得

```ts
import { PrincessApiSdk } from 'princess-api-sdk';

const princessApiSdk = new PrincessApiSdk();
// バージョン指定
const response = await princessApiSdk.getAppVersion('1.0.6');
```

`response`の値

```json
{
  "version": "1.0.6",
  "updatedAt": "2017-06-28T00:00:00+09:00",
  "revision": 63141
}
```

```ts
import { PrincessApiSdk } from 'princess-api-sdk';

const princessApiSdk = new PrincessApiSdk();
// バージョン未指定
const response = await princessApiSdk.getAppVersion();
```

`response`の値

```json
[
  {
    "version": "1.0.6",
    "updatedAt": "2017-06-28T00:00:00+09:00",
    "revision": 63141
  },
  {
    "version": "1.0.7",
    "updatedAt": "2017-07-15T15:00:00+09:00",
    "revision": 66894
  },
  {
    "version": "1.0.9",
    "updatedAt": "2017-07-27T15:00:00+09:00",
    "revision": 70661
  },
  {
    "version": "1.1.0",
    "updatedAt": "2017-08-09T15:00:00+09:00",
    "revision": 76059
  }
]
```

### アセットバージョンの取得

```ts
import { PrincessApiSdk } from 'princess-api-sdk';

const princessApiSdk = new PrincessApiSdk();
// バージョン指定
const response = await princessApiSdk.getAssetVersion(1);
```

`response`の値

```json
{
  "version": 1,
  "updatedAt": "2017-06-29T12:00:00+09:00",
  "indexName": "6b976a4c875a1984592a66b621872ce44c944e72.data"
}
```

```ts
import { PrincessApiSdk } from 'princess-api-sdk';

const princessApiSdk = new PrincessApiSdk();
// バージョン未指定
const response = await princessApiSdk.getAssetVersion();
```

`response`の値

```json
[
  {
    "version": 1,
    "updatedAt": "2017-06-29T12:00:00+09:00",
    "indexName": "6b976a4c875a1984592a66b621872ce44c944e72.data"
  },
  {
    "version": 2,
    "updatedAt": "2017-07-11T17:00:00+09:00",
    "indexName": "83a751e34531a81e83ac5e47393bbb7d483c3da5.data"
  },
  {
    "version": 3,
    "updatedAt": "2017-07-13T15:00:00+09:00",
    "indexName": "77104ecc982fd2344e965f6aba2e83c35a4d49f2.data"
  }
]
```

### アイドルの情報の取得

```ts
import { PrincessApiSdk } from 'princess-api-sdk';

const princessApiSdk = new PrincessApiSdk();
// id指定
const response = await princessApiSdk.getIdolInfo(1);
```

`response`の値

```json
{
  "id": 21,
  "sortId": 21,
  "resourceId": "021mat",
  "type": 1,
  "fullName": "徳川 まつり",
  "displayName": "徳川 まつり",
  "lastName": "徳川",
  "firstName": "まつり",
  "alphabetName": "MATSURI TOKUGAWA",
  "fullNameRuby": "とくがわ まつり",
  "age": 19,
  "birthplace": {
    "id": 23,
    "name": "愛知県"
  },
  "handednessType": {
    "id": 1,
    "name": "右"
  },
  "height": 163.0,
  "weight": 44.0,
  "hobby": "漫画あつめ",
  "speciality": "演技",
  "favorites": "焼きマシュマロ、ウミウシ",
  "cv": "諏訪彩花",
  "colorCode": "#5abfb7",
  "birthday": {
    "month": 2,
    "day": 4
  },
  "constellation": {
    "id": 11,
    "name": "水瓶座"
  },
  "bloodType": {
    "id": 4,
    "name": "AB"
  },
  "measurements": {
    "bust": 85.0,
    "waist": 59.0,
    "hip": 85.0
  }
}
```

```ts
import { PrincessApiSdk } from 'princess-api-sdk';

const princessApiSdk = new PrincessApiSdk();
// id指定なし
const response = await princessApiSdk.getIdolInfo();
```

`response`の値

```json
[
  {
    "id": 1,
    "sortId": 1,
    "resourceId": "001har",
    "type": 1,
    "fullName": "天海 春香",
    "displayName": "天海 春香",
    "lastName": "天海",
    "firstName": "春香",
    "alphabetName": "HARUKA AMAMI",
    "fullNameRuby": "あまみ はるか",
    "age": 17,
    "birthplace": {
      "id": 14,
      "name": "神奈川県"
    },
    "handednessType": {
      "id": 1,
      "name": "右"
    },
    "height": 158.0,
    "weight": 46.0,
    "hobby": "カラオケ、長電話",
    "speciality": "お菓子作り",
    "favorites": "歌うこと",
    "cv": "中村繪里子",
    "colorCode": "#e22b30",
    "birthday": {
      "month": 4,
      "day": 3
    },
    "constellation": {
      "id": 1,
      "name": "牡羊座"
    },
    "bloodType": {
      "id": 3,
      "name": "O"
    },
    "measurements": {
      "bust": 83.0,
      "waist": 56.0,
      "hip": 82.0
    }
  },
  {
    "id": 2,
    "sortId": 2,
    "resourceId": "002chi",
    "type": 2,
    "fullName": "如月 千早",
    "displayName": "如月 千早",
    "lastName": "如月",
    "firstName": "千早",
    "alphabetName": "CHIHAYA KISARAGI",
    "fullNameRuby": "きさらぎ ちはや",
    "age": 16,
    "birthplace": {
      "id": 13,
      "name": "東京都"
    },
    "handednessType": {
      "id": 1,
      "name": "右"
    },
    "height": 162.0,
    "weight": 41.0,
    "hobby": "音楽鑑賞、写真",
    "speciality": "歌",
    "favorites": "トレーニング",
    "cv": "今井麻美",
    "colorCode": "#2743d2",
    "birthday": {
      "month": 2,
      "day": 25
    },
    "constellation": {
      "id": 12,
      "name": "魚座"
    },
    "bloodType": {
      "id": 1,
      "name": "A"
    },
    "measurements": {
      "bust": 72.0,
      "waist": 55.0,
      "hip": 78.0
    }
  }
]
```
