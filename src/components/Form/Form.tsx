/* eslint-disable no-case-declarations */
import { Subscriber } from "../../types";
import useNewSubForm from "../../hooks/useNewSubForm";

interface FormProps {
  onNewSub: (newSub: Subscriber) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    handleClear();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: { inputName: name, inputValue: value },
    });
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
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
        <button type="button" onClick={handleClear}>
          Clear the form
        </button>
      </form>
    </div>
  );
};

export default Form;
