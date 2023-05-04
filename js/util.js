export const randomIntInRange = (min, max) => {
  const a = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const b = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  return Math.floor(Math.random() * (b - a + 1) + a);
};

export const findTemplate = (templateName,elementInTemplate) =>
  document.querySelector(templateName).content(elementInTemplate);


export const isEscKey = (evt) => evt.key ==='Escape';


export const stringLengthValidation = (string, length) => string.length <= length;
