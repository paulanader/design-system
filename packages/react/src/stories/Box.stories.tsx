/* eslint-disable prettier/prettier */
import type { Meta, StoryObj } from "@storybook/react";

import { Box, BoxProps } from "../components/Box";
import { Text } from "../components/Text";

export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta;

export const Primary: StoryObj<BoxProps> = {};
