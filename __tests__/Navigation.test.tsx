import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation/Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show three anchors", () => {
      render(<Navigation />);

      const home = screen.getByRole("link", { name: /anime4me/i });

      expect(home).toBeInTheDocument();
    });
  });
});
