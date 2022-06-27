import Spacing from "../Spacing";

describe('Spacing', () => {
  test('snapshot of spaces', ()=>{
    expect(Spacing).toMatchSnapshot()
  })
})