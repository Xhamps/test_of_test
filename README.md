### Mocha tests

- Sinon spies do not replace the original method. Use stub for that
- If you use the same spy in several tests, you can just reset them in the `afterEach` function
- By using sinon stubs when injecting mock objects, we are able to test for number of calls and other advanced behaviour

