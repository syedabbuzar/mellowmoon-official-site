import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-medium text-maroon">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center bg-maroon text-cream px-5 py-2.5 text-sm font-medium hover:bg-maroon-light transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center bg-maroon text-cream px-5 py-2.5 text-sm font-medium hover:bg-maroon-light transition-colors"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center border border-input px-5 py-2.5 text-sm font-medium hover:bg-secondary transition-colors">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "MellowMoon SoftTech Pvt Ltd — Engineering Software. Empowering Business." },
      { name: "description", content: "MellowMoon SoftTech builds AI-powered software, web & mobile apps, CRM, inventory and business platforms — and trains the next generation of engineers." },
      { name: "author", content: "MellowMoon SoftTech Pvt Ltd" },
      { name: "theme-color", content: "#0D1422" },
      { property: "og:site_name", content: "MellowMoon SoftTech" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "MellowMoon SoftTech Pvt Ltd — Engineering Software. Empowering Business." },
      { name: "twitter:title", content: "MellowMoon SoftTech Pvt Ltd — Engineering Software. Empowering Business." },
      { property: "og:description", content: "MellowMoon SoftTech builds AI-powered software, web & mobile apps, CRM, inventory and business platforms — and trains the next generation of engineers." },
      { name: "twitter:description", content: "MellowMoon SoftTech builds AI-powered software, web & mobile apps, CRM, inventory and business platforms — and trains the next generation of engineers." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5ee7c415-037f-4f1e-9769-f39b5f1db1d7/id-preview-2bf65c40--a2713e1b-c718-4c5b-84c0-4d1070fc96cc.lovable.app-1782226210985.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5ee7c415-037f-4f1e-9769-f39b5f1db1d7/id-preview-2bf65c40--a2713e1b-c718-4c5b-84c0-4d1070fc96cc.lovable.app-1782226210985.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/mellowmoon-logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "MellowMoon SoftTech Pvt Ltd",
          url: "/",
          logo: "/mellowmoon-logo.png",
          description: "Software engineering, AI and training company.",
          sameAs: [],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
