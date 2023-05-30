const addEventsReservation = () => {
  console.log("addEvents() CALLED!!");

  let airplaneMenuBtn = document.querySelector("div.menu_wrap a.reservation");
  airplaneMenuBtn.addEventListener("click", function () {
    console.log("airplaneMenuBtn CLICKED");

    if (signInedMemberId === "") {
      //로그인 안돼있으면 알림 띄우고 로그인 창으로 보냄
      alert("Please SIGN IN!");

      showSelectedView(SIGN_IN_VIEW);
      return;
    }

    showSelectedView(RESERVATION_VIEW);
  });

  let listMenuBtn = document.querySelector("div.menu_wrap a.reservation_list");
  listMenuBtn.addEventListener("click", function () {
    console.log("listMenuBtn CLICKED");

    if (signInedMemberId === "") {
      //로그인 안돼있으면 알림 띄우고 로그인 창으로 보냄
      alert("Please SIGN IN!");

      showSelectedView(SIGN_IN_VIEW);
      return;
    }

    listUpAirplane();
    showSelectedView(RESERVATION_LIST_VIEW);
  });
  /* MENU CLICK EVENT END */

  /* FUNCTION CLICK EVENT START */
  let reservation_btn = document.querySelector("div.reservation_wrap button");
  reservation_btn.addEventListener("click", function () {
    console.log("reservation_btn CLICKED!!");

    let u_id = signInedMemberId;
    let depart_code = document.querySelector(
      'div.reservation_wrap input[name="depart_code"]'
    ).value;
    let depart_date = document.querySelector(
      'div.reservation_wrap input[name="depart_date"]'
    ).value;
    let arrive_code = document.querySelector(
      'div.reservation_wrap input[name="arrive_code"]'
    ).value;
    let arrive_date = document.querySelector(
      'div.reservation_wrap input[name="arrive_date"]'
    ).value;
    let adult = document.querySelector(
      'div.reservation_wrap input[name="adult"]'
    ).value;
    let infant = document.querySelector(
      'div.reservation_wrap input[name="infant"]'
    ).value;
    let child = document.querySelector(
      'div.reservation_wrap input[name="child"]'
    ).value;
    addAirplane(
      u_id,
      depart_code,
      depart_date,
      arrive_code,
      arrive_date,
      adult,
      infant,
      child
    );

    document.querySelector("div.reservation_wrap input").value = "";

    listUpAirplane();
    showSelectedView(RESERVATION_LIST_VIEW);
  });

  /* FUNCTION CLICK EVENT END */
};

const listUpAirplane = () => {
  console.log("listUpAirplane() CALLED!!");

  reservationListWrap.textContent = "";
  let airplaneArr = searchAirplane();

  let tpl = document.querySelector("#list_item");
  let clone = document.importNode(tpl.content, true);
  let txt = clone.querySelector("div.txt");
  //   txt.textContent = airplaneArr[i];

  reservationListWrap.prepend(clone);
};

// airplaneDB.forEach(function (key, value) {
//     if (key.signInedMemberId == u_id) {
//         airplaneDB.get(value).;
//     }
// });
