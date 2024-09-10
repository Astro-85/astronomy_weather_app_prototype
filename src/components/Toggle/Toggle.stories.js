import { Toggle } from ".";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    state: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "off",
    className: {},
  },
};
