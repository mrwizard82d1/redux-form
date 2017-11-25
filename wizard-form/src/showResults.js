/**
 * Simulates an asynchronous call.
 * @param ms The number of milliseconds to delay.
 * @returns {Promise}
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default (async function showResults(values) {
  await sleep(500); // simulate 1/2 second server delay
  window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});
