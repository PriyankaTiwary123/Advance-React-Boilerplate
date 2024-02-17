type FlexJustifyContent =
  | "center"
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "space-around";

type FlexAlignItems = "center" | "flex-start" | "flex-end" | "stretch";

interface FlexMixins {
  flexRow: (
    justifyContent?: FlexJustifyContent,
    alignItems?: FlexAlignItems
  ) => string;
  flexColumn: (
    justifyContent?: FlexJustifyContent,
    alignItems?: FlexAlignItems
  ) => string;
  flexRowCenter: string;
  flexRowStart: string;
  flexRowBetween: string;
  flexColumnCenter: string;
}

const flexMixins: FlexMixins = {
  flexRow: (justifyContent = "center", alignItems = "center") => `
    display: flex;
    flex-direction: row;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,
  flexColumn: (justifyContent = "center", alignItems = "center") => `
    display: flex;
    flex-direction: column;
    justify-content: ${justifyContent};
    align-items: ${alignItems};
  `,
  flexRowCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexRowStart: `
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  flexRowBetween: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexColumnCenter: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

export default flexMixins;
