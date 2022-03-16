import { render, screen } from "@testing-library/react";
import CreateAnime from "../pages/new-anime";
import { wrapper } from "../redux/store";

describe("when its rendered", () => {
  test("then it should be find the heading 'new review'", async () => {
    const WrappedComponent = wrapper.withRedux(CreateAnime);
    render(<WrappedComponent />);

    await screen.getByRole("textbox", { name: /name/i });
  });
});
