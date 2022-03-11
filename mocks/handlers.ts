import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.NEXT_PUBLIC_ANIME4ME}animes/`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        animes: [
          {
            id: "99",
            autor: "tupac",
            image: "image.png",
            name: "naruto",
          },
        ],
      })
    )
  ),
];
