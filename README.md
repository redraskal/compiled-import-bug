# compiled-import-bug

## Issue

[@compiled/parcel-optimizer](https://github.com/atlassian-labs/compiled/tree/master/packages/parcel-optimizer) breaks the CSS `@import 'https://...'` rule with Parcel 2 by 1) disregarding the precedence rule & 2) replaces the semicolon terminator with curly braces.

The curly braces issue also occurs when defining cascade layer precedence. For example, `@layer font, reset, theme;`.

## To Reproduce

Steps to reproduce the behavior:

1. Clone https://github.com/redraskal/compiled-import-bug
2. Run `yarn build` on Node.js<18
3. See error
4. Run `yarn start`, check the index.[hash].css resource for the incorrect syntax
5. Edit .parcelrc, remove @compiled/parcel-optimizer
6. Issue disappears

## Expected behavior

CSS `@import` rule should remain untouched as seen after step 5.

![brave_CIY5Sa96QQ](https://user-images.githubusercontent.com/6241454/164996473-e2b4dd51-200d-4e1e-b321-f486241e1625.png)

## Screenshots

If applicable, add screenshots to help explain your problem.

![brave_fAAcfXDNUh](https://user-images.githubusercontent.com/6241454/164995395-1055e487-8daf-48cc-bde6-dfc2ee14bf06.png)
![Hyper_vOus4IqniN](https://user-images.githubusercontent.com/6241454/164995415-7f7eccdc-58cc-47d3-bd0d-4212bdb1e6a0.png)

## Platform

-   OS: Windows 11 & macOS Monterey
-   Browser: Brave Browser [1.37.116 Chromium: 100.0.4896.127] on Windows, Safari [latest] on macOS
-   Node.js: v16.14.2 (LTS)
