function timeConversion(s) {
  let hour;
  if (s.includes("PM")) {
    if (s.includes("12")) {
      return s.replace("PM", "");
    }
    hour = s.replace("PM", "").split(":");
    hour[0] = Number(hour[0]) + 12;
    return hour.join(":");
  } else {
    return s.replace("AM", "").replace("12", "00");
  }
}
