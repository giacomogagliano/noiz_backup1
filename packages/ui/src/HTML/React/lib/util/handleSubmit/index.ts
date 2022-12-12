import { handleSubmit_v1 } from "./handleSubmit_v1";

/**
 * This HOF creates a handleSubmit callback which are
 * meant to handle the submit event emitted by the element
 * to which we pass this function. It was mainly written to
 * handle submits coming from a form `onSubmit` handler.
 * Usually once submitted a value shall be resetted.
 * Therefor this function accepts a reset callback which
 * usualy is the method which handles the state.
 * Usage:
 * ```tsx
 * const coo = (props: { name: string }) => {
 *   const defaultValue = "";
 *   const [input, setInput] = useState("");
 *   const [value, setValue] = useState(defaultValue);
 *   const cb1: gSubmitEventHandler<string> = e => {
 *     // do something else
 *     doSomethinWith(e);
 *     post(value);
 *   };
 *   const hc = (e: ChangeEvent<HTMLInputElement>) => {
 *     setInput(e.target.value);
 *   };
 *   const cbs = handleSubmit([setValue, cb1], input);
 *   return (
 *     <form onSubmit={cbs}>
 *       {props.name}
 *       <input onChange={hc}></input>
 *     </form>
 *   );
 * };
 * ```
 * @param callBacks List of callback that should be called
 * by the handleSubmit handler.
 * @param value its the value which shall be passed to the
 * callback.
 * @param reset its a function which resets the state.
 * @returns an handler function
 */
export const handleSubmit = handleSubmit_v1;
