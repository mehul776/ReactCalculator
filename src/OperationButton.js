import { ACTIONS } from "./App";
import "./OperationButton.css";
export default function DigitButton({dispatch, operation}) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
      className="operation"
    >
      {operation}
    </button>
  );
}
