import { useReducer } from "react"

// メッセージデータ
// type定義
// 0 = portrich
// 1 = user
function createData(id, type, content, created_at, mention) {
  return { id, type, content, created_at, mention }
}

export const messageData = [
  createData(
    0, 1, 'テスト', '20 Mar 2018'
  ),
  createData(
    1, 0, 'portrichですテスト', '20 Mar 2018'
  ),
  createData(
    2, 0, 'portrichですテスト', '20 Mar 2018'
  ),
  createData(
    3, 1, 'userテスト', '2020-10-10', 'Portrichサポートチーム'
  ),
]