import {
  FormStyle,
  mapLabelledInputs,
} from "./Form.style";

export const Form_v1 = (
  { handleSubmit }: any,
  { children }: any
) => {
  let mappedLabelledInputs = mapLabelledInputs();
  return (
    <FormStyle onSubmit={handleSubmit}>
      {mappedLabelledInputs}
      <input type="submit" id="submit-button"></input>
      {children}
    </FormStyle>
  );
};
