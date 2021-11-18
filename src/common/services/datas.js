export const monthdata = [];
const date = new Date();
for (var i = 0; i < 5; i++) {
  monthdata[i] = `${
    date.getMonth() + i > 11
      ? date.getFullYear() + 1 + "/" + (date.getMonth() + i - 11)
      : date.getFullYear() + "/" + (date.getMonth() + i + 1)
  }`;
}

function createData(id, value) {
  return { id, value };
}
export const timedata = Array.from(new Array(24 * 8)).map((_, index) =>
  createData(
    `${Math.floor(index / 2)}${index % 2 === 0 ? "" : ".5"}`,
    `${index < 20 ? "0" : ""}${Math.floor(index / 2)}:${
      index % 2 === 0 ? "00" : "30"
    }`
  )
);
