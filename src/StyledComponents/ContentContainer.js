import styled from "styled-components";

export const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

// set the column width for different screens
function getWidthString(span) {
  if (!span) return;

  let width = (span / 12) * 100;
  return `width: ${width}%;`;
}

export const Column = styled.div`
  float: left;
  width: 100%;

  ${({ sm }) => (sm ? getWidthString(sm) : "width: 100%;")}

  @media only screen and (min-width: 700px) {
    ${({ md }) => md && getWidthString(md)};
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)};
    padding-top: 20%;
  }
`;
