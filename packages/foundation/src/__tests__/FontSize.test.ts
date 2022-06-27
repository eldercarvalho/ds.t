import FontSize from "../FontSize";

describe('FontSize', () => {
  test('snapshot of font sizes', () => {
    expect(FontSize).toMatchSnapshot()
  })
})