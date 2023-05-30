const SIGN_UP_VIEW = 1;
const SIGN_IN_VIEW = 2;
const SIGN_OUT_VIEW = 3;
const EDIT_PROFILE_VIEW = 4;
const RESERVATION_VIEW = 5;
const RESERVATION_LIST_VIEW = 6;

let signUpWrap = "";
let signInWrap = "";
let editWrap = "";
let reservationWrap = "";
let reservationListWrap = "";

const initViews = () => {
  console.log("initViews() CALLED!!!");

  signUpWrap = document.querySelector("div.sign_up_wrap");
  signInWrap = document.querySelector("div.sign_in_wrap");
  editWrap = document.querySelector("div.sign_modify_wrap");
  reservationWrap = document.querySelector("div.reservation_wrap");
  reservationListWrap = document.querySelector("div.reservation_list_wrap");
};

const showSelectedView = (viewNo) => {
  console.log("showSelectedView() CALLED!!!");

  switch (viewNo) {
    case SIGN_UP_VIEW:
      signUpWrap.style.display = "block";
      signInWrap.style.display = "none";
      editWrap.style.display = "none";
      reservationWrap.style.display = "none";
      reservationListWrap.style.display = "none";
      break;
    case SIGN_IN_VIEW:
    case SIGN_OUT_VIEW:
      signUpWrap.style.display = "none";
      signInWrap.style.display = "block";
      editWrap.style.display = "none";
      reservationWrap.style.display = "none";
      reservationListWrap.style.display = "none";
      break;
    case EDIT_PROFILE_VIEW:
      signUpWrap.style.display = "none";
      signInWrap.style.display = "none";
      editWrap.style.display = "block";
      reservationWrap.style.display = "none";
      reservationListWrap.style.display = "none";
      break;
    case RESERVATION_VIEW:
      signUpWrap.style.display = "none";
      signInWrap.style.display = "none";
      editWrap.style.display = "none";
      reservationWrap.style.display = "block";
      reservationListWrap.style.display = "none";
      break;
    case RESERVATION_LIST_VIEW:
      signUpWrap.style.display = "none";
      signInWrap.style.display = "none";
      editWrap.style.display = "none";
      reservationWrap.style.display = "none";
      reservationListWrap.style.display = "block";
      break;
  }
};
