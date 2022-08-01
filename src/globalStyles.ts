import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  *:before,
  *:after {
    box-sizing: inherit;
  }

  *,
  *:after,
  *:before {
    padding: 0;
    margin: 0;
  }

  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  span,
  em,
  small,
  strong,
  sub,
  sup,
  mark,
  del,
  ins,
  strike,
  abbr,
  dfn,
  blockquote,
  q,
  cite,
  code,
  pre,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  div,
  section,
  article,
  main,
  aside,
  nav,
  header,
  hgroup,
  footer,
  img,
  figure,
  figcaption,
  address,
  time,
  audio,
  video,
  canvas,
  iframe,
  details,
  summary,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    min-height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    position:relative;
    font-family: 'Roboto', sans-serif;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
    border-style: none;
  }

  video {
    max-width: 100%;
  }

  article,
  aside,
  footer,
  header,
  nav,
  section,
  main,
  img {
    display: block;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: '';
    content: none;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  textarea {
    white-space: revert;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
 `;
