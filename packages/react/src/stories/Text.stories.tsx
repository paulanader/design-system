/* eslint-disable prettier/prettier */
import type { Meta, StoryObj } from "@storybook/react";

import { Text, TextProps } from "../components/Text";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    size: "md",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quisquam repellendus tempore optio! Quasi doloribus eum ab expedita blanditiis sint dolorem reiciendis nisi nesciunt! Nisi in cumque autem reprehenderit suscipit.",
  },
  argTypes: {
    size: {
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: "strong",
  },
};
