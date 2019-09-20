import styled from "styled-components";
import { space, color, layout } from "styled-system";

export const Section = styled.section({
  padding: "24px",
});

export const Box = styled.div(
  {
    borderRadius: "2px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.125)",
  },
  space,
  color
)
