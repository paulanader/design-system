/* eslint-disable prettier/prettier */
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../components/Box";
import { TextArea, TextAreaProps } from "../components/TextArea";
import { Text } from "../components/Text";

export default {
  title: "Form/Text Area",
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: "Add any observations...",
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
