let airplaneDB = new Map();

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
            ${key.d_code} / ${key.d_date} / ${key.r_no} / ${key.u_id}
        </div>
        `;
    }
  });

  //   return airplaneArr;
};
