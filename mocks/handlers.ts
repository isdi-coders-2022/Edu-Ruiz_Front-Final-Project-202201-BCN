import { rest } from "msw";

export const handlers = [
  rest.get(`${process.env.NEXT_PUBLIC_ANIME4ME}animes/`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        animes: [
          {
            id: "1",
            autor: "tupac",
            image: "image.png",
            name: "naruto",
          },
          {
            id: "2",
            autor: "tupac",
            image: "image.png",
            name: "naruto",
          },
        ],
      })
    )
  ),
  rest.delete(`${process.env.NEXT_PUBLIC_ANIME4ME}animes/2`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({}))
  ),
  rest.delete(`${process.env.NEXT_PUBLIC_ANIME4ME}animes/10`, (req, res, ctx) =>
    res(ctx.status(404), ctx.json({}))
  ),
  rest.post(
    `${process.env.NEXT_PUBLIC_ANIME4ME}animes/create`,
    (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({
          id: "2",
          autor: "tupac",
          image: "image.png",
          name: "naruto",
        })
      );
    }
  ),
  rest.post(
    `${process.env.NEXT_PUBLIC_ANIME4ME}animes/create`,
    (req, res, ctx) => {
      return res(ctx.status(400), ctx.json({}));
    }
  ),
];
