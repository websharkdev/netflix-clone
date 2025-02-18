export const removeSpacing = (value: string) =>
    value.replace(/\s/g, '_').trim().toLocaleLowerCase();
