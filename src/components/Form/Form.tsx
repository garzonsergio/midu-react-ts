import { useState } from "react";
import { Subscriber } from "../../types";

interface FormState {
  inputValues: Subscriber;
}
const Form = () => {
  const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
  });

  const handleSubmit = () => {};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
          onChange={handleChange}
        />
        <input
          value={inputValues.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
          onChange={handleChange}
        />
        <input
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
          onChange={handleChange}
        />
        <textarea
          value={inputValues.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <button type="submit">Save new Sub</button>
      </form>
    </div>
  );
};

export default Form;
