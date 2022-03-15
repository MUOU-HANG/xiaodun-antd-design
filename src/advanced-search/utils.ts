
// 过滤空值 undefined|null
export const filterEmptyData = (SourceData: object) => {
  for (const [key, value] of Object.entries(SourceData)) {
    if (value === undefined || value === null) {
      delete SourceData[key];
    }
  }
  return SourceData;
};

