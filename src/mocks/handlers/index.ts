/** @see {docs} https://mswjs.io/docs/network-behavior/rest */

// src/mocks/handlers.js
import { delay, http, HttpResponse } from "msw";
import { getUserUrl } from "../../apis/getUser";

export const handlers = [
  // basic
  // http.get(`${getUserUrl()}`, ({ cookies }) => {
  //   // cookies
  //   if (cookies?.session != null) {
  //     /** @see {docs} https://developer.mozilla.org/ko/docs/Web/HTTP/Status/401 */
  //     return new HttpResponse(null, { status: 401 });
  //   }

  //   return HttpResponse.json(
  //     {
  //       name: "Jaehun",
  //     },
  //     { status: 200 }
  //   );
  // }),

  http.get(`${getUserUrl()}`, async () => {
    await delay(3000);

    // 50% failure
    const shouldFail = Math.random() < 0.9;

    if (shouldFail) {
      return HttpResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }

    return HttpResponse.json({ error: "Success" }, { status: 200 });
  }),

  // TODO:
  http.get("/posts", () => {
    /** @see {docs} https://developer.mozilla.org/ko/docs/Web/HTTP/Status/200 */
    return HttpResponse.json([]);
  }),

  http.post("/posts", async () => {
    // request body
    // const requestBody = await request.json();

    /** @see {docs} https://developer.mozilla.org/ko/docs/Web/HTTP/Status/201 */
    return HttpResponse.json([], { status: 201 });
  }),

  http.delete("/posts/:id", () => {
    // path params
    // const { id } = params;

    /** @see {docs} https://developer.mozilla.org/ko/docs/Web/HTTP/Status/404 */
    // if (params?.id) {
    //   return new HttpResponse(null, { status: 404 });
    // }

    return HttpResponse.json([]);
  }),
];
