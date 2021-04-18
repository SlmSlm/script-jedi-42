// https://www.codewars.com/kata/55e7650c8d894146be000095/

function validateMessage(msg) {
  if (msg === null) {
    throw new ReferenceError("Message is null!");
  } else if (typeof msg != "string") {
    throw new TypeError(
      `Message should be of type string but was of type ${typeof msg}!`
    );
  } else if (msg.length === 0 || msg.length > 255) {
    throw new RangeError(`Message contains ${msg.length} characters!`);
  } else if (msg.includes("<") && msg.includes(">")) {
    return false;
  }
  return true;
}
