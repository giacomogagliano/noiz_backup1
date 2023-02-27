"use client";
import { Body } from "../lib/style/Body.style";
import StyledComponentsRegistry from "../lib/registry";
import ThemeProvider from "../classes/ThemeProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      <head />
      <StyledComponentsRegistry>
        <ThemeProvider>
          <Body>{children}</Body>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
