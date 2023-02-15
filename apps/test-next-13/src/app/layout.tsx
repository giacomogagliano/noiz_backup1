import { Body } from "../components/StylesSheet";
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
