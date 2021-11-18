const Config = () => {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  if (process.env.NODE_ENV === "test") {
    // test
    return {
      googleMapsApiKey,
      api: {
        key: process.env.REACT_APP_TEST_API_KEY,
        url: process.env.REACT_APP_TEST_API_URL,
      },
    };
  }
  if (process.env.NODE_ENV === "production") {
    // production
    return {
      googleMapsApiKey,
      api: {
        key: process.env.REACT_APP_PROD_API_KEY,
        url: process.env.REACT_APP_PROD_API_URL,
      },
    };
  }
  // development
  return {
    googleMapsApiKey,
    api: {
      key: process.env.REACT_APP_DEV_API_KEY,
      // url: process.env.REACT_APP_DEV_API_URL,
      url: "http://localhost:8000",
    },
  };
};
export const AppConfig = Config();
