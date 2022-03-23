import { render, screen } from "@testing-library/react";
import Register from "../pages/register";
import { wrapper } from "../redux/store";

describe("when its rendered", () => {
  test("then it should be find the heading '404 - Page Not Found'", async () => {
    const WrappedComponent = wrapper.withRedux(Register);
    render(<WrappedComponent />);

    await screen.getByRole("heading", { name: /Register/i });
  });
});
