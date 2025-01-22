import type { OneRouter } from 'one'

declare module 'one' {
  export namespace OneRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(blog)` | `/(blog)/blog` | `/(blog)/draft` | `/(docs)` | `/(docs)/docs/ai` | `/(site)` | `/(site)/` | `/(site)/(blog)` | `/(site)/(blog)/blog` | `/(site)/(blog)/draft` | `/(site)/(docs)` | `/(site)/(docs)/docs/ai` | `/(site)/blog` | `/(site)/community` | `/(site)/components/FAQ` | `/(site)/components/Gallery` | `/(site)/components/KeyFeatures` | `/(site)/components/LocationClimate` | `/(site)/components/MembershipTiers` | `/(site)/components/NewsUpdates` | `/(site)/components/ProjectImpact` | `/(site)/components/ProjectRoadmap` | `/(site)/data/gallery` | `/(site)/data/news` | `/(site)/data/team` | `/(site)/docs/ai` | `/(site)/draft` | `/(site)/privacy` | `/_sitemap` | `/blog` | `/community` | `/community-spaces` | `/components/FAQ` | `/components/Gallery` | `/components/KeyFeatures` | `/components/LocationClimate` | `/components/MembershipTiers` | `/components/NewsUpdates` | `/components/ProjectImpact` | `/components/ProjectRoadmap` | `/data/gallery` | `/data/news` | `/data/team` | `/docs/ai` | `/draft` | `/privacy` | `/sandbox` | `/test`
      DynamicRoutes: `/(blog)/blog/${OneRouter.SingleRoutePart<T>}` | `/(docs)/docs/core/${OneRouter.SingleRoutePart<T>}` | `/(docs)/docs/guides/${OneRouter.SingleRoutePart<T>}` | `/(docs)/docs/intro/${OneRouter.SingleRoutePart<T>}` | `/(docs)/ui/${string}` | `/(site)/(blog)/blog/${OneRouter.SingleRoutePart<T>}` | `/(site)/(docs)/docs/core/${OneRouter.SingleRoutePart<T>}` | `/(site)/(docs)/docs/guides/${OneRouter.SingleRoutePart<T>}` | `/(site)/(docs)/docs/intro/${OneRouter.SingleRoutePart<T>}` | `/(site)/(docs)/ui/${string}` | `/(site)/blog/${OneRouter.SingleRoutePart<T>}` | `/(site)/docs/core/${OneRouter.SingleRoutePart<T>}` | `/(site)/docs/guides/${OneRouter.SingleRoutePart<T>}` | `/(site)/docs/intro/${OneRouter.SingleRoutePart<T>}` | `/(site)/ui/${string}` | `/blog/${OneRouter.SingleRoutePart<T>}` | `/docs/core/${OneRouter.SingleRoutePart<T>}` | `/docs/guides/${OneRouter.SingleRoutePart<T>}` | `/docs/intro/${OneRouter.SingleRoutePart<T>}` | `/ui/${string}`
      DynamicRouteTemplate: `/(blog)/blog/[slug]` | `/(docs)/docs/core/[slug]` | `/(docs)/docs/guides/[slug]` | `/(docs)/docs/intro/[slug]` | `/(docs)/ui/[...subpath]` | `/(site)/(blog)/blog/[slug]` | `/(site)/(docs)/docs/core/[slug]` | `/(site)/(docs)/docs/guides/[slug]` | `/(site)/(docs)/docs/intro/[slug]` | `/(site)/(docs)/ui/[...subpath]` | `/(site)/blog/[slug]` | `/(site)/docs/core/[slug]` | `/(site)/docs/guides/[slug]` | `/(site)/docs/intro/[slug]` | `/(site)/ui/[...subpath]` | `/blog/[slug]` | `/docs/core/[slug]` | `/docs/guides/[slug]` | `/docs/intro/[slug]` | `/ui/[...subpath]`
      IsTyped: true
    }
  }
}