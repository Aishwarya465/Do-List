module.exports = getDate;
function getDate() {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  return day = today.toLocaleDateString("en-US", options);
}

function getday() {
  let today = new Date();

  let options = {
    weekday: "long"
  };
  return day = today.toLocalDateString("en-US", options);
}
