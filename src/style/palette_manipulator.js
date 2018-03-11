import tinycolor from 'tinycolor2';

const getMainColor = muiColor => (muiColor.main);

const multiply = (rgb1, rgb2) => {
  const max = 255;

  const blue = Math.floor((rgb1.b * rgb2.b) / max);
  const green = Math.floor((rgb1.g * rgb2.g) / max);
  const red = Math.floor((rgb1.r * rgb2.r) / max);

  return tinycolor(`rgb ${red} ${green} ${blue}`);
};

const getColorObject = (value, name) => {
  const color = tinycolor(value);

  return {
    name,
    hex: color.toHexString(),
    darkContrast: color.isLight(),
  };
};

const generatePaletteFromBase = (base) => {
  const baseLight = tinycolor('#ffffff');
  const baseDark = multiply(tinycolor(base).toRgb(), tinycolor(base).toRgb());
  const baseTriad = tinycolor(base).tetrad();

  return {
    50: getColorObject(tinycolor.mix(baseLight, base, 12), '50').hex,
    100: getColorObject(tinycolor.mix(baseLight, base, 30), '100').hex,
    200: getColorObject(tinycolor.mix(baseLight, base, 50), '200').hex,
    300: getColorObject(tinycolor.mix(baseLight, base, 70), '300').hex,
    400: getColorObject(tinycolor.mix(baseLight, base, 85), '400').hex,
    500: getColorObject(tinycolor.mix(baseLight, base, 100), '500').hex,
    600: getColorObject(tinycolor.mix(baseDark, base, 87), '600').hex,
    700: getColorObject(tinycolor.mix(baseDark, base, 70)).hex,
    800: getColorObject(tinycolor.mix(baseDark, base, 54), '800').hex,
    900: getColorObject(tinycolor.mix(baseDark, base, 25), '900').hex,
    A100: getColorObject(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(80).lighten(65), 'A100').hex,
    A200: getColorObject(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(80).lighten(55), 'A200').hex,
    A400: getColorObject(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(100).lighten(45), 'A400').hex,
    A700: getColorObject(tinycolor.mix(baseDark, baseTriad[4], 15).saturate(100).lighten(40), 'A700').hex,
    light: getColorObject(tinycolor.mix(baseLight, base, 70), '300').hex,
    dark: getColorObject(tinycolor.mix(baseDark, base, 70), '700').hex,
    main: base,
  };
};

export { getMainColor, generatePaletteFromBase };
