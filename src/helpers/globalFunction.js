export const rupiah = (value) => {
  let stringValue = value.toString().replace(/[^,\d]/g, "");
  let split = stringValue.split(",");
  let diff = split[0].length % 3;
  let rp = split[0].substr(0, diff);
  let thousand = split[0].substr(diff).match(/\d{3}/gi);

  if (thousand) {
    let separator = diff ? "." : "";
    rp += separator + thousand.join(".");
  }

  rp = split[1] !== undefined ? rp + "," + split[1] : rp;
  return rp ? "Rp. " + rp : "";
};
