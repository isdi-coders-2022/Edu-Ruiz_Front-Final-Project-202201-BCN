import { render, screen } from "@testing-library/react";
import FloatingMenu from "../components/FloatingMenu/FloatingMenu";

describe("Given a FloatingMenu component", () => {
  describe("When it recives a 'FloatingMenu' with boolean true", () => {
    test("then it render a 3 buttons", () => {
      render(<FloatingMenu isActive={true} />);

      const home = screen.getByRole("link", { name: /profile/i });

      expect(home).toBeInTheDocument();
    });
  });
});
