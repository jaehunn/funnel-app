/** @see {docs} https://mswjs.io/docs/network-behavior/rest */

// src/mocks/handlers.js
import { http, HttpResponse } from "msw";
import { getUserUrl } from "../../apis/getUser";

export const handlers = [
  http.get(`${getUserUrl()}`, ({ cookies }) => {
    // cookies
    if (cookies?.session != null) {
      /** @see {docs} https://developer.mozilla.org/ko/docs/Web/HTTP/Status/401 */
      return new HttpResponse(null, { status: 401 });
    }

    return HttpResponse.json(
      {
        name: "Jaehun",
      },
      { status: 200 }
    );
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
