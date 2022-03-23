import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { wrapper } from "../redux/store";
import RegisterForm from "../components/RegisterForm/RegisterForm";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show three anchors", () => {
      const WrappedComponent = wrapper.withRedux(RegisterForm);
      render(<WrappedComponent />);

      const newAnime = screen.getByRole("heading", { name: "Register" });

      expect(newAnime).toBeInTheDocument();
    });
  });
});

describe("when its rendered", () => {
  test("then it should be find the heading 'new review'", () => {
    const inputedText = "holabuenosdías";

    const WrappedComponent = wrapper.withRedux(RegisterForm);
    render(<WrappedComponent />);

    const input = screen.getByRole("textbox", { name: "name" });
    userEvent.type(input, inputedText);
    expect(input).toHaveValue(inputedText);
  });
});

describe("when its rendered", () => {
  test("handleSubmit", async () => {
    const formValues = {
      username: "awa",
      password: "uwu",
    };

    const file = new File(["hello"], "hello.png", { type: "image/png" });

    const WrappedComponent = wrapper.withRedux(RegisterForm);
    render(<WrappedComponent />);

    const form = await screen.getByTestId("register-form");
    const inputUsername = await screen.getByRole("textbox", {
      name: "username",
    });
    const addFile = screen.getByPlaceholderText("img");
    const button = await screen.getByRole("button");
    const inputPassword = await screen.getByTitle("password");

    userEvent.type(inputUsername, "awa");
    userEvent.type(inputPassword, "uwu");
    userEvent.upload(addFile, file);
    userEvent.click(button);

    expect(form).toHaveFormValues(formValues);
  });
});
