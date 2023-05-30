const airplaneDB = new Map();
const memberDB = new Map();

// Member db

const addMember = (id, pw, gender, mail, phone, regDate) => {
  console.log("addMember() CALLED!!!!");

  memberDB.set(id, {
    u_id: id,
    u_pw: pw,
    u_gender: gender,
    u_mail: mail,
    u_phone: phone,
    u_regDate: regDate,
  });

  console.log(memberDB.get(id));
};

addMember("1", "1234", "male", "1234@gmail.com", "145", "1234");
const searchMember = (id, pw) => {
  console.log("searchMember() CALLED!!!");

  let memObj = memberDB.get(id);
  if (memObj !== undefined && memObj.u_pw === pw) {
    console.log("SIGN IN SUCCESS!!!!");
    return true;
  }

  console.log("SIGN IN FAIL!!!");
  return false;
};

const searchMemberRegDate = (id) => {
  console.log("searchMemberRegDate() CALLED!!!");

  return memberDB.get(id).u_regDate;
};

const searchMemberPW = (id) => {
  console.log("searchMemberPW() CALLED!!!");

  return memberDB.get(id).u_pw;
};

const deleteProfile = (id) => {
  console.log("deleteProfile() CALLED!!!");

  memberDB.delete(id);
};



// airplane DB

// let departCode = document.querySelector('.reservation_wrap input[name="depart_code"]').value
let reservationNumber = 0;
const addAirplane = (
  signInedMemberId,
  depart_code,
  depart_date,
  arrive_code,
  arrive_date,
  adult,
  infant,
  child
) => {
  console.log("addAirplane() CALLED");

  airplaneDB.set(reservationNumber, {
    r_no: reservationNumber,
    u_id: signInedMemberId,
    d_code: depart_code,
    d_date: depart_date,
    a_code: arrive_code,
    a_date: arrive_date,
    adul: adult,
    infan: infant,
    chil: child,
  });
  console.log(airplaneDB.get(reservationNumber));
  reservationNumber++;
};

const searchAirplane = () => {
  console.log("addAirplane() CALLED");

  airplaneDB.forEach(function (key, value) {
    if (key.u_id == signInedMemberId) {
      reservationListWrap.innerHTML += `
        <div>
           예약 번호 : ${key.r_no} / 출발지 코드 : ${key.d_code} / 출발 날짜 : ${key.d_date}
                                   / 도착지 코드 : ${key.a_code} / 도착 날짜 : ${key.a_date} / 
             성인 수 : ${key.adul} / 소아 수 : ${key.infan}     / 유아 수 : ${key.chil}
        </div>
        `;
    }
  });

  //   return airplaneArr;
};
