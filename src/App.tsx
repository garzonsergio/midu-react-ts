import { useEffect, useRef, useState } from "react";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import "./App.css";
import { Subscriber } from "./types";
import { getAllSubs } from "./services/getAllSubs";

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
    getAllSubs().then(setSubs);
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
