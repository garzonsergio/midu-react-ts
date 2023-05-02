import { useEffect, useState } from "react";
import "./App.css";

interface subscriber {
  nick: string;
  subMonths: number;
  avatar: string;
  description?: string;
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
  const [subs, setSubs] = useState<Array<subscriber>>();

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <>
      <div>
        <ul>
          {subs?.map((sub) => {
            return (
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar of ${sub.nick}`} />
                <h4>
                  {sub.nick}(<small>{sub.subMonths}</small>)
                </h4>
                <p>{sub.description?.substring(0, 100)}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
