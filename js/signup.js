const addEventsProfile = () => {

    /* MENU CLICK EVENT START */
    let signUpMenuBtn = document.querySelector('사인업 메뉴 버튼');
    signUpMenuBtn.addEventListener('click', function () {
        console.log('signUpMenuBtn CLICKED!!!!');

        showSelectedView(SIGN_UP_VIEW);
    });

    let signInMenuBtn = document.querySelector('로그인 메뉴 버튼');
    signInMenuBtn.addEventListener('click', function () {
        console.log('signInMenuBtn CLICKED!!!!');

        showSelectedView(SIGN_IN_VIEW);
    });

    let signOutMenuBtn = document.querySelector('로그아웃 메뉴 버튼');
    signOutMenuBtn.addEventListener('click', function () {
        console.log('signOutMenuBtn CLICKED!!!!');

        showSelectedView(SIGN_OUT_VIEW);
    });


    let editProfileMenuBtn = document.querySelector('회원 수정 메뉴 버튼');
    editProfileMenuBtn.addEventListener('click', function () {
        console.log('editProfileBtn CLICKED!!!!');

        showSelectedView(EDIT_PROFILE);
    });
    /* MENU CLICK EVENT END */


    /* FUNCTION CLICK EVENT START*/
    let signUpBtn = document.querySelector('회원가입 랩에서 회원가입 버튼');
    signUpBtn.addEventListener('click', function () {
        console.log('signUpBtn CLICKED!!!');

        let u_id = document.querySelector('div.sign_up_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_up_wrap input[name="u_pw"]').value;
        let u_gender = document.querySelector('div.sign_up_wrap input[name="성별"]').value;
        let u_mail = document.querySelector('이메일 ').value;
        let u_phone = document.querySelector('폰 ').value;
        let u_regDate = new Date();


        addMember(u_id, u_pw, u_mail, u_gender, u_phone, u_regDate);

        alert('SIGN UP SUCCESS!!!');
        document.querySelector('div.sign_up_wrap input[name="u_id"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="u_pw"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="성별"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="메일"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="폰"]').value = '';
    });

    
    let signInBtn = document.querySelector('회원가입 버튼');
    signInBtn.addEventListener('click', function() {
        console.log('signInBtn CLICKED!!!');

        let u_id = document.querySelector('div.sign_in_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_in_wrap input[name="u_pw"]').value;

        let isMember = searchMember(u_id, u_pw);

        if (isMember) {

            alert('SIGN IN SUCCESS!!!');

            signInedMemberId = u_id;
            setMenuStatus(SIGN_IN_STATUS);


            listUpDiaries();
            showSelectedView(DIARY_LIST_VIEW);
        } else {
            
            alert('SIGN IN FAIL!!!');

            signInedMemberId ='';

        }
        document.querySelector('div.sign_in_wrap input[name="u_id"]').value = '';
        document.querySelector('div.sign_in_wrap input[name="u_pw"]').value = '';
    });

    let editProfileBtn = document.querySelector('회원수정 랩에서 회원수정 버튼');
    editProfileBtn.addEventListener('click', function () {
        console.log('signUpBtn CLICKED!!!');

        let u_pw = document.querySelector('div.sign_up_wrap input[name="u_pw"]').value;
        let u_gender = document.querySelector('div.sign_up_wrap input[name="성별"]').value;
        let u_mail = document.querySelector('이메일 ').value;
        let u_phone = document.querySelector('폰 ').value;
        let u_regDate = 


        addMember(u_id, u_pw, u_mail, u_gender, u_phone);

        alert('SIGN UP SUCCESS!!!');
        document.querySelector('div.sign_up_wrap input[name="u_id"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="u_pw"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="성별"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="메일"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="폰"]').value = '';
    });
    /* FUNCTION CLICK EVENT END*/
}