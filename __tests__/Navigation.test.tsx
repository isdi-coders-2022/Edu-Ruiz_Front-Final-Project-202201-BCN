import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation/Navigation";
import userEvents from "@testing-library/user-event";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show three anchors", () => {
      render(<Navigation />);

      const home = screen.getByRole("link", { name: /anime4me/i });

      expect(home).toBeInTheDocument();
    });
  });

  describe("When the burguer is clicked", () => {
    test("Then it should toggle its aparence", () => {
      render(<Navigation />);

      const burguer = screen.getByTitle("Navigation Menu");
      userEvents.click(burguer);
      const text = screen.getAllByRole("link", { name: /profile/i })[1];

      expect(text).toBeInTheDocument();

      userEvents.click(burguer);

      expect(text).not.toBeInTheDocument();
    });
  });
});
