# npm-install-issue-recreate

This is repository to recreate an issue with `npm install`. How to use it:

1. Clone the repository.
2. `cd src/`.
3. `npm install`
4. `npm start` - should compile and work.
5. `npm install` 

## What happens?

`package-lock.json` gets updated second time - `npm install` is not idempotent.

## What should happen?

`package-lock.json` should not be updated when running second time - `npm install` should be idempotent.

## Quickfix?

`npm ci` seems to work consistently, but it is not obvious and `npm install` is
the first thing everyone thinks about running.
