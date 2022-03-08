import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it's rendered with an anchor inside", () => {
    test("Then it should show an anchor", () => {
      const name = "layoutTest";
      render(
        <Layout>
          <a href="home">{name}</a>
        </Layout>
      );

      const anchor = screen.queryByRole("link", { name });

      expect(anchor).toBeInTheDocument();
    });
  });
});
