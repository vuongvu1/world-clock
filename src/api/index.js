const BASE_URL = "http://api.timezonedb.com/v2.1";

const baseFetch = async ({ apiName, params }) => {
  const paramsStr = Object.entries(params).reduce((str, [key, value]) => {
    return `${str}&${key}=${value}`;
  }, "");

  const URL = `${BASE_URL}/${apiName}?key=${__myapp?.env.TIMEZONE_API_KEY}
  ${paramsStr}`;

  const result = await fetch(URL).then((response) => response.json());

  if (result.status !== "OK") {
    throw new Error("Fetching failed!");
  }

  return result;
};

export const getAllTimezones = () => {
  const args = {
    apiName: "list-time-zone",
    params: { format: "json" },
  };

  return baseFetch(args);
};
