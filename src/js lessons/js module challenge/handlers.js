export function getOptions(data) {
  return Object.entries(data)

    .map(
      ([country, currency]) =>
        `<option value="${country}">${
          country == 'MSG' ? ' ' : country
        }  ${currency}</option>`
    )
    .join('');
}
