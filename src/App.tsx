import { useEffect, useRef, useState } from "react";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import { Subscriber, SubscriberFromApi } from "./types";
import "./App.css";
import axios from "axios";

interface AppState {
  subscribers: Subscriber[];
  newSubscribersNumber: number;
}

function App() {
  const [subs, setSubs] = useState<AppState["subscribers"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubscribersNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchSubs = (): Promise<SubscriberFromApi> => {
      return axios.get("http://localhost:3000/data").then((response) => response.data);
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

    fetchSubs().then((apiSubs) => {
      const subs = mapFromApiToSubs(apiSubs);
      setSubs(subs);
    });
  }, []);

  const handleNewSub = (newSub: Subscriber): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  return (
    <>
      <div ref={divRef}>
        <List subs={subs} />
        New Subscribers : {newSubsNumber}
        <Form onNewSub={handleNewSub} />
      </div>
    </>
  );
}

export default App;
