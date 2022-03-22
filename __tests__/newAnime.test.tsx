import { render, screen } from "@testing-library/react";
import NewAnime from "../components/newAnime/newAnime";
import userEvent from "@testing-library/user-event";
import { wrapper } from "../redux/store";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show three anchors", () => {
      const WrappedComponent = wrapper.withRedux(NewAnime);
      render(<WrappedComponent />);

      const newAnime = screen.getByRole("heading", { name: "New Anime" });

      expect(newAnime).toBeInTheDocument();
    });
  });
});

describe("when its rendered", () => {
  test("then it should be find the heading 'new review'", () => {
    const inputedText = "holabuenosdías";

    const WrappedComponent = wrapper.withRedux(NewAnime);
    render(<WrappedComponent />);

    const input = screen.getByRole("textbox", { name: /name/i });
    userEvent.type(input, inputedText);
    expect(input).toHaveValue(inputedText);
  });
});

describe("when its rendered", () => {
  test("then it should be find the input contain a file", async () => {
    const file: any = new File(["hello"], "hello.png", { type: "image/png" });

    const WrappedComponent = wrapper.withRedux(NewAnime);
    render(<WrappedComponent />);

    const input = await screen.getByTitle("image-upload");

    await userEvent.upload(input, file);

    expect(input).not.toBeDisabled();
  });
});
