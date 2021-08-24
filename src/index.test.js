import { closureState } from ".";

test("set initial state as undefined", () => {
  const [get] = closureState();

  expect(get()).toBeUndefined();
});

test("get initial state", () => {
  const [get] = closureState(0);

  expect(get()).toBe(0);
});

test("set state", () => {
  const [get, set] = closureState(0);

  set(2);

  expect(get()).toBe(2);
});

test("set function", () => {
  const [get, set] = closureState(0);

  set((c) => c + 1);

  expect(get()).toBe(1);
});

test("set function returned value", () => {
  const [get, set] = closureState(0);

  const newState = set((c) => c + 1);

  expect(get()).toBe(1);
  expect(newState).toBe(1);
});
