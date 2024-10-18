import {
  createTheme,
  defaultVariantColorsResolver,
  MantineColorsTuple,
  MantineThemeOverride,
  VariantColorsResolver,
} from "@mantine/core";
import { cn } from "../helpers/styles";

const innovieGreen: MantineColorsTuple = [
  "#f5ffde", // generated
  "#f2ffd6", // generated
  "#efffce", // generated
  "#edffc6", // generated
  "#eaffbd", // generated
  "#e8ffb5", // generated
  "#E5FFAD", // default,focus,loader
  "#D0EF8D", // hover,pressed,border
  "#b7cc8a", // generated
  "#a0b379", // generated
];

const innoviePurple: MantineColorsTuple = [
  "#9e9fac", // generated
  "#868797", // generated
  "#6d6e82", // generated
  "#55566d", // generated
  "#3d3e59", // generated
  "#242644", // generated
  "#0C0E2F", // background, color
  "#0b0d2a", // generated
  "#0a0b26", // generated
  "#080a21", // generated
];

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultVariant = defaultVariantColorsResolver(input);
  const { color, theme } = input;
  if (color === "innovieGreen") {
    return {
      ...defaultVariant,
      color: theme.colors.innoviePurple?.[6] ?? "",
      border: `1px solid ${theme.colors.innovieGreen?.[7] ?? ""}`,
    };
  }
  if (color === "innoviePurple") {
    return {
      ...defaultVariant,
      border: `1px solid ${theme.colors.gray[4]}`,
    };
  }
  return defaultVariant;
};

export const theme: MantineThemeOverride = createTheme({
  colors: {
    innovieGreen,
    innoviePurple,
  },
  primaryColor: "innoviePurple",
  fontFamily: "Mackinac",
  fontFamilyMonospace: "Grotesk",
  focusClassName: "focus",
  variantColorResolver,
  components: {
    Accordion: {
      classNames: {
        root: "font-grotesk",
        control: "!outline-none text-background",
        panel: "text-disabled-foreground font-thin",
      },
    },
    Stepper: {
      classNames: {
        step: "!outline-none opacity-70 progress:opacity-100 completed:opacity-100",
        verticalSeparator: "border-gradient",
        stepIcon: cn(
          "text-disabled-foreground font-grotesk bg-white bg-opacity-[0.05] backdrop-blur-md  border-[#50559D] border-[1px] ",
          "completed:bg-white completed:border-white",
          "progress:bg-white progress:border-white progress:text-background"
        ),
        stepLabel: "text-white font-grotesk ",
        stepDescription: "font-grotesk text-white/70",
      },
    },
    Menu: {
      classNames: {
        dropdown: "font-grotesk",
      },
    },
    Table: {
      classNames: {
        table: "font-grotesk text-uppercase",
        thead:
          "uppercase bg-disabled/10 border-t border-x-0 border-b-0 border-solid border-disabled text-disabled-foreground text-xs leading-7",
        tbody: "mx-4 text-background leading-8",
      },
    },
    Pagination: {
      classNames: {
        control: "border-0 font-grotesk",
      },
    },
    Modal: {
      classNames: {
        header: "font-grotesk [&>h2]:text-xl [&>h2]:font-medium",
      },
    },
    Checkbox: {
      classNames: {
        root: "font-grotesk",
      },
    },
    Input: {
      classNames: {
        input: "font-grotesk",
      },
    },
    TextInput: {
      defaultProps: {
        ff: "monospace",
      },
    },
    Select: {
      defaultProps: {
        ff: "monospace",
      },
      classNames: {
        option: "font-grotesk",
      },
    },
  },
});
