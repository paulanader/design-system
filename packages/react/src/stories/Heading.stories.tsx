/* eslint-disable prettier/prettier */
import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "../components/Heading";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    size: "md",
    children: "Custom title",
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "2xl", "4xl", "5xl", "6xl"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: "h1",
  },

  parameters: {
    doc: {
      description: {
        story:
          "By default the heading will always be `h2`, but we can change it with the prop `as`",
      },
    },
  },
};
