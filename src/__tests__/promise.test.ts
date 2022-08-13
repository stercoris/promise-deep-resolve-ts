import { promiseDeepResolve } from 'index';

const getBuildedNodes = () =>
  Promise.resolve({
    root: Promise.resolve({
      child: Promise.resolve('value'),
      secChild: Promise.resolve(2),
      thirdChild: Promise.resolve(['value', 2]),
    }),
  });

test('Corect deep resolving', async () => {
  const deepResolved = await promiseDeepResolve(getBuildedNodes());
  expect(deepResolved).toMatchObject({
    root: {
      child: 'value',
      secChild: 2,
      thirdChild: ['value', 2],
    },
  });
});
