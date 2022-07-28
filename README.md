# nuxt-tiktok-pixel-module


[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> A NuxtJS module thats injects TikTok Pixel code

Inspired by [https://github.com/GuillaumeFerron/nuxt-tiktok-pixel-module#readme](https://github.com/GuillaumeFerron/nuxt-tiktok-pixel-module#readme)


## Table of Contents ##

* [Requirements](#requirements)
* [Install](#install)
* [Getting Started](#getting-started)
* [License](#license)

## Requirements

* npm or yarn
* NuxtJS
* NodeJS

## Install

```bash
$ npm install --save nuxt-tiktok-pixel-module
// or
$ yarn add nuxt-tiktok-pixel-module
```

## Getting Started

Add `nuxt-tiktok-pixel-module` to `modules` section of `nuxt.config.js`.
```js
{
  modules: [
    // Simple usage
    'nuxt-tiktok-pixel-module',

    // With options
    ['nuxt-tiktok-pixel-module', {
      /* module options */
      pixel: 'TIKTOK_PIXEL_ID',
      disabled: false
    }],
 ]
}
```
or even
```js
{
  modules: [
    'nuxt-tiktok-pixel-module',
  ],
  tiktok: {
    /* module options */
    pixel: 'TIKTOK_PIXEL_ID',
    disabled: false
  },
}
```

## Disabling the pixel (for GDPR)

If you'd like to install the pixel disabled, and enable it later after the user has consented to its use, you can do so by setting `disabled: true` in the pixel configuration:

```js
{
  modules: [
    'nuxt-tiktok-pixel-module',
  ],
  tiktok: {
    ...
    disabled: true
  },
}
```

Now, in your component, you can call the following in order to start the pixel and track the current page.

```js
this.$tiktok.enable()
```
For Custom Tracking, you can call the following:

```js
this.$tiktok.track("AddToCart")

or

this.$tiktok.track("AddToCart",{value:1})
```

## Module options

List of possible options in the module:

| Option   | Default  | Required | Description                                                                               |
|----------|----------|----------|-------------------------------------------------------------------------------------------|
| pixel  | null     | true     | The pixel identifier provided by TikTok business.|
| disabled | false    | false    | Disable the pixel by default when initialized. Can be enabled later through `$tiktok.enable()`.

## TikTok pixel instance

The tracking pixel instance is available on all vue component instances as $tiktok. It has the following methods:

| Method            | Purpose                                                                                                  | Equivalent to                  |
|-------------------|----------------------------------------------------------------------------------------------------------|--------------------------------|
| enable()          | If you had previously set `disabled: true` in config, enables the pixel and tracks the current page view | $tiktok.init()        |

## License

[MIT License]
