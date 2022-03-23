import { render, screen } from "@testing-library/react";
import NewAnime from "../components/newAnime/newAnime";
import userEvent from "@testing-library/user-event";
import { wrapper } from "../redux/store";
import { wait } from "@testing-library/user-event/dist/utils";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show three anchors", async () => {
      const WrappedComponent = wrapper.withRedux(NewAnime);
      render(<WrappedComponent />);

      const newAnime = screen.getByRole("heading", { name: "New Anime" });

      expect(newAnime).toBeInTheDocument();
    });
  });
});

describe("when its rendered", () => {
  test("then it should be find the heading 'new review'", async () => {
    const inputedText = "holabuenosdías";

    const WrappedComponent = wrapper.withRedux(NewAnime);
    render(<WrappedComponent />);

    const input = screen.getByRole("textbox", { name: /name/i });
    userEvent.type(input, inputedText);

    expect(input).toHaveValue(inputedText);
  });
});
