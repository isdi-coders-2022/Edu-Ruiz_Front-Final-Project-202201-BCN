import { render, screen } from "@testing-library/react";
import Login from "../pages/login";
import { wrapper } from "../redux/store";

describe("when its rendered", () => {
  test("then it should be find the heading 'login'", async () => {
    const WrappedComponent = wrapper.withRedux(Login);
    render(<WrappedComponent />);

    await screen.getByRole("heading", { name: /Login/i });
  });
});
