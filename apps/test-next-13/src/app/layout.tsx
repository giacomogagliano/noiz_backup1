import { Body } from "../lib/style/Body.style";
import StyledComponentsRegistry from "../lib/registry";
import ZaionSideControl from "../components/ZaionSideControl";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <StyledComponentsRegistry>
        <Body>
          {children}
          {/* <ZaionSideControl></ZaionSideControl> */}
        </Body>
      </StyledComponentsRegistry>
    </html>
  );
}
