//メール形式チェック
export const validEmailFormat = (item) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(item);
};
//平仮名チェック
export const validHiragana = (item) => {
  const regex = /^[ぁ-んー　]*$/;
  return regex.test(item);
};
//郵便番号形式チェック
export const validZip = (item) => {
  const regex = /^[0-9]{7}$/;
  return regex.test(item);
};
//電話形式チェック
export const validTell = (item) => {
  const regex = /^[0-9]{9,12}$/;
  return regex.test(item);
};
//半角英数字のみチェック
export const validHankakuEisuu = (item) => {
  const regex = /^[a-zA-Z0-9!-/:-@¥[-`{-~]*$/;
  return regex.test(item);
};
//8文字以上チェック
export const validMinlength = (item) => {
  const regex = /^([a-zA-Z0-9]{8,})$/;
  return regex.test(item);
};
//同値チェック
export const validEquivalent = (item, item2) => {
  if (item === item2) {
    return true;
  }
};
//50文字以下チェック
export const validMaxlength50 = (item) => {
  const regex = /^.{0,50}$/;
  return regex.test(item);
};
