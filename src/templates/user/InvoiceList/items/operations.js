function createData(
  caseNo,
  userId,
  from,
  etd,
  to,
  eta,
  paymentDate,
  paymentStatus,
  price
) {
  return {
    caseNo,
    userId,
    from,
    etd,
    to,
    eta,
    paymentDate,
    paymentStatus,
    price,
  };
}

export const contentItem = [
  createData(
    "1",
    "45345",
    "Kawasaki,Japan",
    "ETD：2021-7-30",
    "Sint Eustatius, Bona...",
    "ETA : 2021-7-30",
    "2021-09-29",
    "支払済",
    "2,500$"
  ),
  createData(
    "12",
    "45345",
    "Kawasaki,Japan",
    "ETD：2021-7-30",
    "Sint Eustatius, Bona...",
    "ETA : 2021-7-30",
    "2021-09-29",
    "支払済",
    "2,500$"
  ),
  createData(
    "123",
    "45345",
    "Kawasaki,Japan",
    "ETD：2021-7-30",
    "Sint Eustatius, Bona...",
    "ETA : 2021-7-30",
    "2021-09-29",
    "未払い",
    "2,500$"
  ),
  createData(
    "1234",
    "45345",
    "Kawasaki,Japan",
    "ETD：2021-7-30",
    "Sint Eustatius, Bona...",
    "ETA : 2021-7-30",
    "2021-09-29",
    "未払い赤",
    "2,500$"
  ),
];

function createDataDetail(
  prfe,
  paymentDate,
  price,
  paymentStatus,
  lateFees,
  costOfTesting,
  shortDrayage
) {
  return {
    prfe,
    paymentDate,
    price,
    paymentStatus,
    lateFees,
    costOfTesting,
    shortDrayage,
  };
}

export const detailItem = [
  createDataDetail(
    "PRFE2021-00001",
    "2021-09-29",
    "2,500$",
    "支払済",
    "$540",
    "¥5389",
    "¥5389"
  ),
  createDataDetail(
    "PRFE2021-00002",
    "2021-09-29",
    "2,500$",
    "支払済",
    "$540",
    "¥5389",
    "¥5389"
  ),
  createDataDetail(
    "PRFE2021-00003",
    "2021-09-29",
    "2,500$",
    "支払済",
    "$540",
    "¥5389",
    "¥5389"
  ),
];
