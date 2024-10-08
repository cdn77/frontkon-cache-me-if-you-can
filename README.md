# Cache Me If You Can - demo

This project contains a simple web site bundled with Vite. The website also exposes an API, which intentionally introduces horrible latencies. The goal of this workshop is to configure caching headers (both for HTTP and for CDN cache) to improve the performance.

## About the demo

### The slow API

The intentionally slow API is defined in the [./src/routes/api](./src/routes/api) directory. You can globally tweak the latency by changing the [./src/routes/api/delay.ts](./src/routes/api/delay.ts) file

### Header configuration

Response headers for pages are specified in the [./src/routes/(shop)/+layout.server.ts](<./src/routes/(shop)/+layout.server.ts>) file.

Response headers for assets are handled by the framework itself. Practically any framework has reasonable default cache-control headers for assets.

### Things to inspect:

- response headers on images
- response headers on pages
- the latency in different situations (first and second request from the same device, cross-device behavior when deployed behind CDN...)

## Running the demo

### Requirements

- [Node.js](https://nodejs.org/en) in version `22.9.0` (.node-version file is included, so you can use fnm or similar tools)
- [pnpm](https://pnpm.io/) (use `corepack enable pnpm` in the project folder to enable it)

### Getting started

```sh
# Enable pnpm
corepack enable pnpm

# Install dependencies
pnpm i

# Create a production build and run it locally
pnpm demo
```

### Running the app on a server

To create a production build:

```sh
# The build is located in /build
pnpm build
```

To run the production build:

```sh
# In a folder containing the built app, e.g. /build
# (or wherever you deployed it)
node index.js
```

You can set `HOST` and `PORT` variables to configure the runtime. By default, the app listens on `0.0.0.0:3000`.
