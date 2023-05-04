import { SubscriberFromApi, Subscriber } from "../types";
import axios from "axios";

export const getAllSubs = () => {
  return fetchSubs().then(mapFromApiToSubs);
};
const fetchSubs = async (): Promise<SubscriberFromApi> => {
  const response = await axios.get("http://localhost:3000/data");
  return response.data;
};

const mapFromApiToSubs = (
  apiResponse: SubscriberFromApi
): Array<Subscriber> => {
  return apiResponse.map((subFromApi) => {
    const {
      months: subMonths,
      profileUrl: avatar,
      nick,
      description,
    } = subFromApi;
    return {
      nick,
      description,
      avatar,
      subMonths,
    };
  });
};
