export const START_STEPS = "START_STEPS";

export function startSteps(type) {
  // console.log('steps: ', type);
  return { type: START_STEPS, payload: type };
}
