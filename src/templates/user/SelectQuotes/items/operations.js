function createData(
  isexport,
  company,
  freetime,
  money,
  deadline,
  freight,
  extra,
  drage,
  importCustoms,
  importHandling,
  tariffs,
  tax,
  lateFees,
  costOfTesting,
  shortDrayage
) {
  return {
    isexport,
    company,
    freetime,
    money,
    deadline,
    freight,
    extra,
    drage,
    importCustoms,
    importHandling,
    tariffs,
    tax,
    lateFees,
    costOfTesting,
    shortDrayage,
  };
}

export const SelectQuotesContent = [
  createData(
    false,
    "Shipping company A",
    "DEM:14 days / DET: 7 days",
    "24,000",
    "2021/10/10",
    "$777",
    "$540",
    "¥5389",
    "$540",
    "¥5389",
    "$540",
    "¥5389",
    "$540",
    "¥5389",
    "¥5389"
  ),
  createData(
    false,
    "Shipping company A",
    "Combine:14 days",
    "24,000",
    "2021/10/10",
    "$777",
    "$540",
    "¥5389",
    "$540",
    "¥5389",
    "$540",
    "¥5389",
    "$540",
    "¥5389",
    "¥5389"
  ),
  createData(
    false,
    "Shipping company A",
    "DEM:14 days / DET: 7 days",
    "24,000",
    "2021/10/10",
    "$777",
    "$540",
    "¥5389",
    "$540",
    "¥5389",
    "$540",
    "¥5389",
    "$540",
    "¥5389",
    "¥5389"
  ),
];