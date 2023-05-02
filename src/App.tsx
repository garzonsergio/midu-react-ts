import { useEffect, useState } from "react";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import "./App.css";

interface subscriber {
  nick: string;
  subMonths: number;
  avatar: string;
  description?: string;
}

interface AppState {
  subscribers: Array<subscriber>;
  newSubscribersNumber: number;
}

const INITIAL_STATE: subscriber[] = [
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
  const [subs, setSubs] = useState<AppState["subscribers"]>();
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubscribersNumber"]>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <>
      <div>
        <List subs={subs} />
        <Form />
      </div>
    </>
  );
}

export default App;
