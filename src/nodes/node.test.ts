import Node from "./node";

describe('Node', () => {
  let node: Node;
  const data = "test";

  beforeEach(() => {
    //
  });

  test('data value', () => {
    node = new Node();
    expect(node.data).toEqual(data);
  });

  test('left value', () => {

  });

  test('right value', () => {

  });

})