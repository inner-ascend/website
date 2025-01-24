import type { OneRouter } from 'one'

declare module 'one' {
  export namespace OneRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(blog)` | `/(blog)/blog` | `/(blog)/draft` | `/(docs)` | `/(docs)/docs/ai` | `/(site)` | `/(site)/` | `/(site)/(blog)` | `/(site)/(blog)/blog` | `/(site)/(blog)/draft` | `/(site)/(docs)` | `/(site)/(docs)/docs/ai` | `/(site)/blog` | `/(site)/collaborate` | `/(site)/community` | `/(site)/docs/ai` | `/(site)/draft` | `/(site)/mexico` | `/(site)/privacy` | `/_sitemap` | `/blog` | `/collaborate` | `/community` | `/community-spaces` | `/docs/ai` | `/draft` | `/mexico` | `/not-found` | `/privacy` | `/sandbox` | `/test`
      DynamicRoutes: `/${string}` | `/(blog)/blog/${OneRouter.SingleRoutePart<T>}` | `/(docs)/docs/core/${OneRouter.SingleRoutePart<T>}` | `/(docs)/docs/guides/${OneRouter.SingleRoutePart<T>}` | `/(docs)/docs/intro/${OneRouter.SingleRoutePart<T>}` | `/(docs)/ui/${string}` | `/(site)/${string}` | `/(site)/(blog)/blog/${OneRouter.SingleRoutePart<T>}` | `/(site)/(docs)/docs/core/${OneRouter.SingleRoutePart<T>}` | `/(site)/(docs)/docs/guides/${OneRouter.SingleRoutePart<T>}` | `/(site)/(docs)/docs/intro/${OneRouter.SingleRoutePart<T>}` | `/(site)/(docs)/ui/${string}` | `/(site)/blog/${OneRouter.SingleRoutePart<T>}` | `/(site)/docs/core/${OneRouter.SingleRoutePart<T>}` | `/(site)/docs/guides/${OneRouter.SingleRoutePart<T>}` | `/(site)/docs/intro/${OneRouter.SingleRoutePart<T>}` | `/(site)/ui/${string}` | `/blog/${OneRouter.SingleRoutePart<T>}` | `/docs/core/${OneRouter.SingleRoutePart<T>}` | `/docs/guides/${OneRouter.SingleRoutePart<T>}` | `/docs/intro/${OneRouter.SingleRoutePart<T>}` | `/ui/${string}`
      DynamicRouteTemplate: `/(blog)/blog/[slug]` | `/(docs)/docs/core/[slug]` | `/(docs)/docs/guides/[slug]` | `/(docs)/docs/intro/[slug]` | `/(docs)/ui/[...subpath]` | `/(site)/(blog)/blog/[slug]` | `/(site)/(docs)/docs/core/[slug]` | `/(site)/(docs)/docs/guides/[slug]` | `/(site)/(docs)/docs/intro/[slug]` | `/(site)/(docs)/ui/[...subpath]` | `/(site)/[...404]` | `/(site)/blog/[slug]` | `/(site)/docs/core/[slug]` | `/(site)/docs/guides/[slug]` | `/(site)/docs/intro/[slug]` | `/(site)/ui/[...subpath]` | `/[...404]` | `/blog/[slug]` | `/docs/core/[slug]` | `/docs/guides/[slug]` | `/docs/intro/[slug]` | `/ui/[...subpath]`
      IsTyped: true
    }
  }
}