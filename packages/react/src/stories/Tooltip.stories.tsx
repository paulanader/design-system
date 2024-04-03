/* eslint-disable prettier/prettier */
import type { Meta, StoryObj } from "@storybook/react";
import { TooltipComponent, TooltipProps } from "../components/Tooltip";

export default {
  title: "Alerts/Tooltip",
  component: TooltipComponent,
  args: {},
} as Meta;

export const Primary: StoryObj<TooltipProps> = {
  args: {
    date: new Date(),
    status: true,
  },
};
export const Disabled: StoryObj<TooltipProps> = {
  args: {
    date: new Date(),
    status: false,
  },
};
