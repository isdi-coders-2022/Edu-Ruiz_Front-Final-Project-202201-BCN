import { render, screen } from "@testing-library/react";
import Custom404 from "../pages/404";
import { wrapper } from "../redux/store";

describe("when its rendered", () => {
  test("then it should be find the heading '404 - Page Not Found'", async () => {
    const WrappedComponent = wrapper.withRedux(Custom404);
    render(<WrappedComponent />);

    await screen.getByRole("heading", { name: /404 - Page Not Found/i });
  });
});
