let airplaneDB = new Map();

let departCode = document.querySelector('.reservation_wrap input[name="depart_code"]').value
let reservationNumber =0;
const addAirplane = (signInedMemberId, depart_code,depart_date,arrive_code,arrive_date,adult,infant,child) => {
    console.log('addAirplane() CALLED');

    airplaneDB.set(reservationNumber, {
        u_id: signInedMemberId,
        d_code: depart_code,
        d_date: depart_date,
        a_code: arrive_code,
        a_date: arrive_date,
        adul: adult,
        infan: infant,
        chil: child,
    })
    console.log(airplaneDB.get(id));
    reservationNumber++;
};

const searchAirplane = () => {
    console.log('addAirplane() CALLED');

    let airplaneArr = airplaneDB.get(signInedMemberId);
    console.log('diaryArr: ', airplaneArr);

    return airplaneArr;

}



