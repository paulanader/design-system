/* eslint-disable prettier/prettier */
import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarProps } from "../components/Avatar";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/paulanader.png",
    alt: "Foto usuário",
  },
  argTypes: {
    src: {
      control: {
        type: "text",
      },
    },
  },
} as Meta;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
