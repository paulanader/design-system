/* eslint-disable prettier/prettier */
import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../components/Box";
import { MultiStep, MultiStepProps } from "../components/MultiStep";

export default {
  title: "Form/MultiStep",
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", flexDirection: "column", gap: "$2" }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta;

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
