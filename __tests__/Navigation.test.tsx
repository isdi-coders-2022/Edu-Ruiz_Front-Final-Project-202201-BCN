import { render, screen } from "@testing-library/react";
import Navigation from "../components/Navigation/Navigation";
import { wrapper } from "../redux/store";
import userEvents from "@testing-library/user-event";

jest.mock("next/router", () => {
  const router = {
    push: jest.fn(),
  };
  return {
    useRouter: () => router.push("/"),
  };
});

describe("when its rendered", () => {
  test("then it should be find the heading 'new review'", async () => {
    const WrappedComponent = wrapper.withRedux(Navigation);
    render(<WrappedComponent />);

    await screen.getByRole("heading", { name: /Anime4me/i });
  });
});

const mockLocalStorage = {
  getItem: () =>
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGVwZSIsInVzZXJuYW1lIjoicGVwZSIsImlkIjoiNjIzMzFkZjQ3NDMzMGZiZDI4ZDU5NWUxIiwiaWF0IjoxNjQ3NTE3Mjg4fQ.suBLCba7CxFLfXRDudmvdL1uRzVFGAlnWxkOngW0i1A",
};

Object.defineProperty(window, "localStorage", { value: mockLocalStorage });
describe("when its rendered", () => {
  test("then it should be find the heading 'new review'", async () => {
    const WrappedComponent = wrapper.withRedux(Navigation);
    render(<WrappedComponent />);

    const burguer = await screen.getByTitle("Navigation Menu");
    userEvents.click(burguer);
  });
});
