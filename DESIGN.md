version: alpha
name: nerdwallet.com
description: An analysis of NerdWallet's design language — a personal-finance comparison platform built almost entirely from one deep green and a ladder of mints beneath it. Editorial pages open on a green gradient band, then drop to near-white where dense comparison tables do the real work. Corners are almost square, shadows are nearly absent, and the whole system separates content with hairlines and pale mint washes rather than elevation.

colors:
  primary: "#008254"
  primary-deep: "#006642"
  forest: "#00482f"
  on-primary: "#ffffff"
  lime-hero: "#9ae600"
  lime-panel: "#e8fdac"
  lime-accent: "#ddfa88"
  lime-ribbon: "#a8ea4c"
  logo-lime: "#8dc63f"
  canvas: "#ffffff"
  canvas-soft: "#f7f7f7"
  mint-50: "#effcf8"
  mint-100: "#e3faf2"
  mint-200: "#b7ecda"
  hairline: "#ebebec"
  hairline-strong: "#d8d9da"
  ink: "#000000"
  body: "#3d4045"
  muted: "#64666a"
  faint: "#b1b3b5"
  link: "#005fb9"
  info: "#4b99e6"
  error: "#de2828"

typography:
  display-xl:
    fontFamily: Gotham
    fontSize: 52px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0
  display-lg:
    fontFamily: GothamDisplay
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  heading-1:
    fontFamily: GothamDisplay
    fontSize: 36px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  heading-2:
    fontFamily: Gotham
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  heading-3:
    fontFamily: GothamDisplay
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  heading-4:
    fontFamily: Gotham
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  stat-value:
    fontFamily: Gotham
    fontSize: 24px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  body-lg:
    fontFamily: Gotham
    fontSize: 18px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  body-md:
    fontFamily: Gotham
    fontSize: 16px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: Gotham
    fontSize: 14px
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: 0
  ui-label:
    fontFamily: Gotham
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  ui-sm:
    fontFamily: Gotham
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0
  caption:
    fontFamily: Gotham
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  eyebrow:
    fontFamily: Gotham
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  micro:
    fontFamily: Gotham
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  none: 0px
  xxs: 1px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 10px
  xxl: 12px
  xxxl: 16px
  tooltip: 20px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 20px
  xl: 24px
  xxl: 32px
  section: 40px

components:
  nav-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.ui-label}"

  logo-wordmark:
    textColor: "{colors.primary}"
    typography: "{typography.heading-4}"

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"

  button-secondary:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.primary}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"

  button-outline:
    textColor: "{colors.primary}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
    borderColor: "{colors.hairline-strong}"

  text-input:
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"

  hero-band:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-md}"

  breadcrumb:
    textColor: "{colors.on-primary}"
    typography: "{typography.caption}"

  editorial-badge:
    textColor: "{colors.lime-panel}"
    typography: "{typography.micro}"

  expert-tip-panel:
    backgroundColor: "{colors.lime-panel}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"

  stat-block-dark:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.on-primary}"
    typography: "{typography.stat-value}"
    rounded: "{rounded.lg}"

  stat-chip-light:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.lg}"

  product-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    borderColor: "{colors.hairline-strong}"

  category-tile:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xxl}"

  section-panel-mint:
    backgroundColor: "{colors.mint-50}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xxxl}"

  media-frame-mint:
    backgroundColor: "{colors.mint-100}"
    rounded: "{rounded.xxxl}"

  award-ribbon-pill:
    backgroundColor: "{colors.mint-100}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.none}"

  icon-circle-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"

  icon-circle-inactive:
    backgroundColor: "{colors.mint-50}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"

  comparison-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"

  spec-cell:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.caption}"

  accordion-row:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.ui-label}"
    rounded: "{rounded.lg}"

  link-inline:
    textColor: "{colors.link}"
    typography: "{typography.body-sm}"

  link-green:
    textColor: "{colors.primary}"
    typography: "{typography.body-sm}"

  eyebrow-label:
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"

  footer:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"

  rate-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.xxl}"

  badge-compare:
    backgroundColor: "{colors.lime-panel}"
    textColor: "{colors.primary}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.xl}"

  carousel-control:
    backgroundColor: "{colors.mint-50}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"

  marquee-ribbon:
    backgroundColor: "{colors.lime-ribbon}"
    textColor: "{colors.primary}"
    typography: "{typography.ui-label}"
