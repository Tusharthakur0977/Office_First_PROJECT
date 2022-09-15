export const amplifylightTheme = {
  colorMode: "light",
  tokens: {
    components: {
      button: {
        fontWeight: { value: 400 },
      },
      fieldcontrol: {
        boxShadow: { value: "none" },
        outlineWidth: { value: "0" },
        paddingBlockEnd: { value: "8.5px" },
        paddingBlockStart: { value: "8.5px" },
        paddingInlineStart: { value: "14px" },
        paddingInlineEnd: { value: "14px" },
        fontSize: { value: "1rem" },
        color: {
          value: "rgba(0, 0, 0, 0.87)",
        },
        borderWidth: {
          value: "2px",
        },
        borderColor: {
          value: "#c4c4c4",
        },
        _focus: {
          borderColor: {
            value: `rgb(25, 118, 210)`,
          },
        },
      },
      authenticator: {
        router: {
          boxShadow: { value: "none" },
          borderWidth: { value: 0 },
        },
      },
    },
    colors: {
      blue: {
        100: { value: `#1565C0` },
        90: { value: `#1565C0` },
        80: { value: `#1976D2` },
        60: { value: `#50a1fe` },
        40: { value: `#8cc1fe` },
        20: { value: "#c8e1fe" },
        10: { value: "#e2ecf7" },
      },
      brand: {
        primary: {
          100: { value: `{colors.blue.100.value}` },
          90: { value: `{colors.blue.90.value}` },
          80: { value: `{colors.blue.80.value}` },
          60: { value: `{colors.blue.60.value}` },
          40: { value: `{colors.blue.40.value}` },
          20: { value: `{colors.blue.20.value}` },
          10: { value: `{colors.blue.10.value}` },
        },
      },
    },
  },
};
