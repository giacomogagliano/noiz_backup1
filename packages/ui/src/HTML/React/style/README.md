# Content

This folder contains plain html elements
(div, p, input, button..) with types defining the
css related properties and ways to access them.

1. It contains `.tsx` files which define the css properties
   and how they can be manipulated by passing props down
   from the
   client application.
2. It contains a `Types` folder in which we define the props
   passed down to the element.
3. It contains variations for each elements so that an easy
   configured version can be called from client applications.

## Naming conventions.

1. each HTML element shall have it's own accordingly named
   file.
   Examle: `div` => `div.tsx`.

   - the component shall be exported simply with the name of
     the related html element with first letter capitalized:
     ```js
     export const Div = styled.div``;
     ```

2. each `.tsx` file shall have a related `.ts` file which
   contains the types for the file.
   - the type shall be exported as
     `<Name_of_the_element>Style` like this:
     ```ts
     export type DivStyle = {
      ...
     }
     ```
   - each element shall accept a generic type which is used
     in the client to configure the theme which is usually
     passed down by the `ThemeProvider` styled-components
     tool, in this way:
     ```ts
     export type InputStyle<T> = {
      theme:T;
      ...
     }
     ```

- ## CSS Attributes order

```tsx
const Div = styled.div`
  grid-area: name;
  diplay: grid;
  overflow: auto;
`;
```
