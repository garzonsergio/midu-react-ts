import { useEffect, useRef, useState } from "react";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import { Subscriber } from "./types";
import "./App.css";

interface AppState {
  subscribers: Subscriber[];
  newSubscribersNumber: number;
}

const INITIAL_STATE: Subscriber[] = [
  {
    nick: "jurgen",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=jurgen",
    description: "Nothing special",
  },
  {
    nick: "cosmo",
    subMonths: 12,
    avatar: "https://i.pravatar.cc/150?u=cosmo",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subscribers"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubscribersNumber"]>(0);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSub = (newSub: Subscriber): void => {
    setSubs((subs) => [...subs, newSub]);
  };

  return (
    <>
      <div ref={divRef}>
        <List subs={subs} />
        <Form onNewSub={handleNewSub} />
      </div>
    </>
  );
}

export default App;
