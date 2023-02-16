import { Body } from "../lib/style/StylesSheet";
import StyledComponentsRegistry from "../lib/registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <StyledComponentsRegistry>
        <Body>{children}</Body>
      </StyledComponentsRegistry>
    </html>
  );
}
