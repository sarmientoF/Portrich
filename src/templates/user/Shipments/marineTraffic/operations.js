import axios from "axios";

const VOYAGE_FORECASTS = {
  URL: "https://services.marinetraffic.com/api/voyageforecast/6e42879c68d24ba71319d55dd65bf40ad994ff22",
  OTHER_PARAMS: "/msgtype:extended/protocol:jsono",
};

const TEMP_RESULTS = [
  {
    MMSI: "431851000",
    DESTINATION: "JP THS>US LGB",
    LAST_PORT_ID: "18457",
    LAST_PORT: "TOYOHASHI",
    LAST_PORT_UNLOCODE: "JPTHS",
    LAST_PORT_TIME: "2021-06-04T09:54:00",
    NEXT_PORT_ID: "2727",
    NEXT_PORT_NAME: "LONG BEACH",
    NEXT_PORT_UNLOCODE: "USLGB",
    ETA: "2021-06-17T12:00:00",
    ETA_CALC: "2021-06-17T17:09:00",
    DISTANCE_TRAVELLED: "260",
    DISTANCE_TO_GO: "4738",
    SPEED_CALC: "157",
    DRAUGHT: "94",
    DRAUGHT_MAX: "95",
    LOAD_STATUS_NAME: "LADEN",
    ROUTE:
      "LINESTRING (143.634 36.5034, 144.738 37.0266, 145.964 37.6028, 149.049 39.0225, 151.389 39.9455, 152.794 40.4259, 157.632 42.0599, 158.947 42.5027, 160.275 42.9043, 161.993 43.2946, 163.098 43.5558, 167.499 44.5483, 168.935 44.8697, 170.383 45.1522, 172.333 45.4066, 178.185 46.1489, 179.632 46.3295, -178.927 46.416, -177.801 46.4598, -176.168 46.518, -171.793 46.6819, -170.786 46.7167, -169.98 46.7443, -168.698 46.681, -167.17 46.6039, -165.792 46.536, -160.828 46.2813, -160.087 46.2469, -158.566 46.0392, -157.107 45.8319, -155.507 45.608, -154.325 45.4437, -150.403 44.8861, -149.033 44.5997, -147.671 44.2735, -145.201 43.6785, -140.768 42.5964, -139.475 42.2251, -138.235 41.7915, -137.214 41.4302, -135.859 40.9495, -132.048 39.5823, -130.827 39.1421, -129.79 38.7378, -128.43 38.0948, -127.391 37.5997, -126.252 37.0496, -125.21 36.5421, -124.198 36.0506, -123.192 35.5562, -122.145 35.0413, -121.435 34.6646, -121.428 34.6549, -121.424 34.6394, -121.418 34.636, -121.069 34.5019, -121.043 34.4825, -121.009 34.4421, -120.991 34.433, -120.89 34.4041, -119.776 34.1527, -119.279 34.0393, -118.353 33.5999, -118.344 33.5985, -118.309 33.5996, -118.291 33.5978, -118.265 33.5988, -118.24 33.6044, -118.232 33.6071, -118.225 33.6145, -118.212 33.6353, -118.202 33.6575, -118.18 33.6881, -118.182 33.7099)",
  },
];

export const fetchVoyageForecasts = async (shipid, setApiResult) => {
  if (!shipid) {
    return [];
  }
  const param = `/shipid:${shipid}`;
  const result = await axios.get(
    `${VOYAGE_FORECASTS.URL}${param}${VOYAGE_FORECASTS.OTHER_PARAMS}`
  );
  setApiResult(result.data);
  // setApiResult(VOYAGE_FORECASTS);
};

export const generateRoute = (results, setRoute) => {
  const row = (results && results[0]) || undefined;
  if (!row || !row.ROUTE) {
    setRoute([]);
    return;
  }
  const route = row.ROUTE;
  setRoute(extractLineStringAsLonLatList(route));
};

const extractLineStringAsLonLatList = (route) => {
  const result = /\(.*\)/
    .exec(route)[0]
    .replaceAll(/\(/g, "")
    .replaceAll(/\)/g, "");
  return result.split(", ").map((row) => convertToLonLat(row));
};

const convertToLonLat = (value) => {
  const list = value.split(" ");
  return {
    lng: parse(list[0]),
    lat: parse(list[1]),
  };
};

const parse = (value) => {
  const result = parseFloat(value);
  if (isNaN(result)) {
    return 0;
  }
  return result;
};
