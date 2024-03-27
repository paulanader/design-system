/* eslint-disable prettier/prettier */
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../components/Box";
import { Text } from "../components/Text";
import { Checkbox, CheckboxProps } from "../components/Checkbox";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "row", gap: "$2" }}
        >
          {Story()}
          <Text size="sm">Check</Text>
        </Box>
      );
    },
  ],
} as Meta;

export const Primary: StoryObj<CheckboxProps> = {};
