import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
        projectId: "m1wlz9v9",
        dataset: "production",
        useCdn: true,
        token:"skgJubak8aZH3XIyNdT4fOGlXomCSlFg7HBoPCFy6CAaSqHFax1CsJGQjNEWVcYPSmmiSqVfY5ywMlMKIFF0nrkL8M2s6zRSldKZr71TrfAFXpRRkwLWMXZL7l3ZUZ9klXtvGCKbi8Fl2I4MaTNbJwdArApX61A5WgErMNGMsYHuVVugOGYW",
})


const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
