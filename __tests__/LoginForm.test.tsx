import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { wrapper } from "../redux/store";
import LoginForm from "../components/LoginForm/LoginForm";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show three anchors", () => {
      const WrappedComponent = wrapper.withRedux(LoginForm);
      render(<WrappedComponent />);

      const newAnime = screen.getByRole("heading", { name: "Login" });

      expect(newAnime).toBeInTheDocument();
    });
  });
});

describe("when its rendered", () => {
  test("then it should be find the heading 'new review'", () => {
    const inputedText = "holabuenosdías";

    const WrappedComponent = wrapper.withRedux(LoginForm);
    render(<WrappedComponent />);

    const input = screen.getByRole("textbox", { name: /name/i });
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

    const WrappedComponent = wrapper.withRedux(LoginForm);
    render(<WrappedComponent />);

    const button = await screen.getByTestId("login-form");

    const inputUsername = await screen.getByRole("textbox", {
      name: "username",
    });
    userEvent.type(inputUsername, "awa");
    const inputPassword = await screen.getByTitle("password");
    userEvent.type(inputPassword, "uwu");

    userEvent.click(button);

    expect(button).toHaveFormValues(formValues);
  });
});
