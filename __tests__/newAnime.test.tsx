import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import NewAnime from "../components/newAnime/newAnime";
import store from "../redux/store";
import userEvent from "@testing-library/user-event";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show three anchors", () => {
      render(
        <Provider store={store}>
          <NewAnime />
        </Provider>
      );

      const newAnime = screen.getByRole("heading", { name: "New Anime" });

      expect(newAnime).toBeInTheDocument();
    });
  });
});

describe("when its rendered", () => {
  test("then it should be find the heading 'new review'", () => {
    const inputedText = "hola buenos días";

    render(
      <Provider store={store}>
        <NewAnime />
      </Provider>
    );

    const input = screen.getByRole("textbox", { name: /name/i });
    userEvent.type(input, inputedText);
  });
});

describe("when its rendered", () => {
  test("then it should be find the heading 'new review'", async () => {
    const file: any = new File(["hello"], "hello.png", { type: "image/png" });

    render(
      <Provider store={store}>
        <NewAnime />
      </Provider>
    );

    const input: any = await screen.getByTitle("image-upload");
    await userEvent.upload(input, file);

    expect(input.files[0]).toStrictEqual(file);
    expect(input.files.item(0)).toStrictEqual(file);
    expect(input.files).toHaveLength(1);
  });
});