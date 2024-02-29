import { ACTIONS } from "./App";
import "./DigitButton.css";
export default function DigitButton({dispatch, digit}) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
      className="digit"
    >
      {digit}
    </button>
  );
}
