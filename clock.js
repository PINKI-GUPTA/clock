function time_update() {
    const newdate = new Date();
    let H = newdate.getHours();
    let M = newdate.getMinutes();
    let S = newdate.getSeconds();
    let AMPM = "AM";
    if (H == 12) {
      AMPM = "PM";
    } else if (H == 24) {
      AMPM = "AM";
      H = H - 12;
    } else {
      if (H > 12) {
        AMPM = "PM";
        H = "00";
      } else {
        AMPM = "AM";
      }
    }
    H = H < 10 ? "0" + H : H;
    M = M < 10 ? "0" + M : M;
    S = S < 10 ? "0" + S : S;
    document.getElementById("Hour").innerHTML = H;
    document.getElementById("Minute").innerHTML = M;
    document.getElementById("Second").innerHTML = S;
    document.getElementById("ampm").innerHTML = AMPM;
  }
  setInterval(time_update, 1000);