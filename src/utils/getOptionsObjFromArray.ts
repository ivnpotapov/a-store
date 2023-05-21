type OptionsArray = string | number | boolean | number[] | string[] | undefined;

type MapType = { [key: string]: string };

export const getOptionsObjFromArray = (arr: OptionsArray, map: MapType = {}) => {
  if (Array.isArray(arr)) {
    return arr.map((el, id) => {
      const contentRu = map && map[el] ? map[el] : el;
      return { key: String(id), content: String(contentRu) };
    });
  }

  return [];
};
