# nuxt-snack-video-pixel-module

[![npm version](https://badge.fury.io/js/nuxt-snack-video-pixel-tracking-module.svg)](https://badge.fury.io/js/nuxt-snack-video-pixel-tracking-module)
[![npm](https://img.shields.io/npm/dt/nuxt-snack-video-pixel-tracking-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-snack-video-pixel-tracking-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> A NuxtJS module that injects Snack Video Pixel code with custom tracking functionality



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
$ npm install --save nuxt-snack-video-pixel-module
// or
$ yarn add nuxt-snack-video-pixel-module
```

## Getting Started

Add `nuxt-snack-video-pixel-module` to `modules` section of `nuxt.config.js`.
```js
{
  modules: [
    // Simple usage
    'nuxt-snack-video-pixel-module',

    // With options
    ['nuxt-snack-video-pixel-module', {
      /* module options */
      pixel: 'SNACK_PIXEL_ID',
      disabled: false
    }],
 ]
}
```


## Disabling the pixel (for GDPR)

If you'd like to install the pixel disabled, and enable it later after the user has consented to its use, you can do so by setting `disabled: true` in the pixel configuration:



Now, in your component, you can call the following in order to start the pixel and track the current page.

```js
this.$kwaiq.enable()
```
For Custom Tracking, you can call the following:

```js
 this.$kwaiq.track("addToCart", {
    content_type: "product",
    content_id: this.product._id,
    content_name: this.product.name,
    currency: "PKR",
    price: this.calculatePrice,
    value: this.calculatePrice
});

or

this.$kwaiq.track("purchase", {
    content_type: "product",
    currency: "PKR",
    contents: this.calculateProductArray(this.order.items),
    value: this.order.amount.total,
});
```

## Module options

List of possible options in the module:

| Option   | Default  | Required | Description                                                                               |
|----------|----------|----------|-------------------------------------------------------------------------------------------|
| pixel  | null     | true     | The pixel identifier provided by TikTok business.|
| disabled | false    | false    | Disable the pixel by default when initialized. Can be enabled later through `$tiktok.enable()`.


## License

[MIT License]
