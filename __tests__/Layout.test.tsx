import { render, screen } from "@testing-library/react";
import Layout from "../components/Layout/Layout";
import { wrapper } from "../redux/store";

jest.mock("next/router", () => {
  const router = {
    push: jest.fn(),
  };
  return {
    useRouter: () => router,
  };
});

describe("when its rendered", () => {
  test("then it should be find the heading 'new review'", async () => {
    const WrappedComponent = wrapper.withRedux(Layout);
    render(<WrappedComponent />);

    await screen.getByRole("heading", { name: /Anime4me/i });
  });
});
