import { render } from "@react-email/render";
import * as React from "react";
import { ContactEmail, type ContactEmailProps } from "./ContactEmail";

export async function renderContactEmailHtml(props: ContactEmailProps): Promise<string> {
  return render(React.createElement(ContactEmail, props));
}
