import React from "react";
import { Form, H1, Input, P } from "../../../../HTML";

export default function index() {
  return (
    <>
      <H1>The form .NOIZ element</H1>
      <Form>
        <label>First name:</label>
        <Input type="text" id="fname" name="fname" />
        <br></br>
        <br></br>
        <label>Last name:</label>
        <Input type="text" id="lname" name="lname" />
        <br></br>
        <br></br>
        <Input type="submit" value="Submit" />
      </Form>
      <P>
        Click the "Submit" button and the form-data will be
        sent to a null page
      </P>
    </>
  );
}

<p>
  Click the "Submit" button and the form-data will be sent
  to a page on the server called "action_page.php".
</p>;
