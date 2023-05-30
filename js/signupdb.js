const memberDB = new Map();

// Member db

const addMember = (id, pw, gender, mail, phone, regDate) => {
    console.log('addMember() CALLED!!!!');


    memberDB.set(id, {
        u_id: id, 
        u_pw: pw,
        u_gender: gender,
        u_mail: mail,
        u_phone: phone, 
        u_regDate: regDate});

    console.log(memberDB.get(id));

}


const searchMember = (id, pw) => {
    console.log('searchMember() CALLED!!!');

    let memObj = memberDB.get(id);
    if (memObj !== undefined && memObj.u_pw === pw) {
        console.log('SIGN IN SUCCESS!!!!');
        return true;
    }

    console.log('SIGN IN FAIL!!!');
    return false;
}

const searchMemberRegDate = (id) => {
    console.log('searchMemberRegDate() CALLED!!!');

    return memberDB.get(id).u_regDate;
}


const searchMemberPW = (id) => {
    console.log('searchMemberPW() CALLED!!!');

    return memberDB.get(id).u_pw;
}


const deleteProfile = (id) => {
    console.log('deleteProfile() CALLED!!!');

    memberDB.delete(id);
}