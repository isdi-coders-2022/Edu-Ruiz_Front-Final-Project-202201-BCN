import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import Burguer from "../components/Burguer/Burguer";

describe("Given a Burger component", () => {
  describe("When it's rendered passing a function", () => {
    test("Then it should action click", () => {
      const text = "Navigation Menu";
      const actionClick = jest.fn();

      render(<Burguer actionOnClick={actionClick} isActive={true} />);
      const burger = screen.getByTitle(text);
      userEvents.click(burger);

      expect(actionClick).toHaveBeenCalled();
    });
  });
});
