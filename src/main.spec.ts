import { greeter }from "./main"

test('adds 1 + 2 to equal 3', () => {
    expect(greeter("Socha")).toStrictEqual("Hello, Socha.");
  });

