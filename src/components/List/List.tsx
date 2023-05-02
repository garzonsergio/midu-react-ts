interface Props {
  subs: Array<{
    nick: string;
    subMonths: number;
    avatar: string;
    description?: string;
  }>;
}
function List({ subs }: Props) {
  return (
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
  );
}

export default List;
