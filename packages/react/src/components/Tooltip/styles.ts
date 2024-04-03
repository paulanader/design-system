/* eslint-disable prettier/prettier */

import * as Tooltip from "@radix-ui/react-tooltip";
import { styled } from "../../styles";

export const TooltipContainer = styled(Tooltip.Content, {
  backgroundColor: "$gray900",
  color: "white",
  padding: "$2",
  borderRadius: "$sm",
  border: "1px solid $gray600",
});

export const Button = styled("button", {
  color: "white",
  padding: "$2",
  borderRadius: "$sm",

  variants: {
    active: {
      true: {
        backgroundColor: "$gray900",
        border: "1px solid $gray900",
      },
      false: {
        backgroundColor: "$gray500",
        border: "1px solid $gray500",
      },
    },
  },
});
