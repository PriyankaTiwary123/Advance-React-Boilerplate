import styled from "styled-components";

const createHeadingStyles = (fontSize: string) => styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  font-size: ${fontSize};
`;

export const Text = styled.div`
font-size: 16px;
font-family: 'Open Sans';
`

export const H1 = createHeadingStyles('33px');
export const H2 = createHeadingStyles('28px');
export const H3 = createHeadingStyles('23px');
export const H4 = createHeadingStyles('18px');
