const addEventsProfile = () => {

    /* MENU CLICK EVENT START */
    let signUpMenuBtn = document.querySelector('div.menu_wrap > a.sign_up');
    signUpMenuBtn.addEventListener('click', function () {
        console.log('signUpMenuBtn CLICKED!!!!');

        showSelectedView(SIGN_UP_VIEW);
    });

    let signInMenuBtn = document.querySelector('div.menu_wrap  a.sign_in');
    signInMenuBtn.addEventListener('click', function () {
        console.log('signInMenuBtn CLICKED!!!!');

        showSelectedView(SIGN_IN_VIEW);
    });

    let signOutMenuBtn = document.querySelector('div.menu_wrap > a.sign_out');
    signOutMenuBtn.addEventListener('click', function () {
        console.log('signOutMenuBtn CLICKED!!!!');

        signInedMemberId = '';

        showSelectedView(SIGN_OUT_VIEW);
    });


    let editProfileMenuBtn = document.querySelector('div.menu_wrap > a.sign_modify');
    editProfileMenuBtn.addEventListener('click', function () {
        console.log('editProfileBtn CLICKED!!!!');
        
        let current_id = document.querySelector('div.sign_modify_wrap div.current_id');

        current_id.textContent = signInedMemberId;

        showSelectedView(EDIT_PROFILE_VIEW);
    });
    /* MENU CLICK EVENT END */


    /* FUNCTION CLICK EVENT START*/
    let signUpBtn = document.querySelector('div.sign_up_wrap button.sign_up_btn');
    signUpBtn.addEventListener('click', function () {
        console.log('signUpBtn CLICKED!!!');

        let u_id = document.querySelector('div.sign_up_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_up_wrap input[name="u_pw"]').value;
        let u_gender = document.querySelector('div.sign_up_wrap select[name="u_gender"]').value;
        let u_mail = document.querySelector('div.sign_up_wrap input[name="u_mail"]').value;
        let u_phone = document.querySelector('div.sign_up_wrap input[name="u_phone"]').value;
        let u_regDate = new Date();


        addMember(u_id, u_pw, u_mail, u_gender, u_phone, u_regDate);

        alert('SIGN UP SUCCESS!!!');

        document.querySelector('div.sign_up_wrap input[name="u_id"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="u_pw"]').value = '';
        document.querySelector('div.sign_up_wrap select[name="u_gender"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="u_mail"]').value = '';
        document.querySelector('div.sign_up_wrap input[name="u_phone"]').value = '';
    });

    
    let signInBtn = document.querySelector('div.sign_in_wrap button.sign_in_btn');
    signInBtn.addEventListener('click', function() {
        console.log('signInBtn CLICKED!!!');

        let u_id = document.querySelector('div.sign_in_wrap input[name="u_id"]').value;
        let u_pw = document.querySelector('div.sign_in_wrap input[name="u_pw"]').value;

        let isMember = searchMember(u_id, u_pw);

        if (isMember) {

            alert('SIGN IN SUCCESS!!!');

            signInedMemberId = u_id;
            // setMenuStatus(SIGN_IN_STATUS);

        } else {
            
            alert('SIGN IN FAIL!!!');

            signInedMemberId ='';

        }
        document.querySelector('div.sign_in_wrap input[name="u_id"]').value = '';
        document.querySelector('div.sign_in_wrap input[name="u_pw"]').value = '';
    });

    let editProfileBtn = document.querySelector('div.sign_modify_wrap button.sign_modify_btn');
    editProfileBtn.addEventListener('click', function () {
        console.log('signUpBtn CLICKED!!!');

        let u_id = signInedMemberId;
        let u_pw = document.querySelector('div.sign_modify_wrap input[name="u_pw"]').value;
        let u_gender = document.querySelector('div.sign_modify_wrap select[name="u_gender"]').value;
        let u_mail = document.querySelector('div.sign_modify_wrap input[name="u_mail"]').value;
        let u_phone = document.querySelector('div.sign_modify_wrap input[name="u_phone"]').value;
        let u_regDate = searchMemberRegDate(u_id);


        addMember(u_id, u_pw, u_mail, u_gender, u_phone, u_regDate);

        alert('EDIT SUCCESS!!!');
       
        document.querySelector('div.sign_modify_wrap input[name="u_pw"]').value = '';
        document.querySelector('div.sign_modify_wrap select[name="u_gender"]').value = '';
        document.querySelector('div.sign_modify_wrap input[name="u_mail"]').value ='';
       document.querySelector('div.sign_modify_wrap input[name="u_phone"]').value ='';
    });

    let deleteProfileBtn = document.querySelector('div.sign_modify_wrap > button.delete_user_btn');
    deleteProfileBtn.addEventListener('click', function() {
        
        let u_pw = document.querySelector('div.sign_modify_wrap input[name="u_pw"]').value;

        console.log(u_pw);
        console.log(typeof u_pw);
        console.log(searchMemberPW(signInedMemberId));
        console.log(typeof searchMemberPW(signInedMemberId));

        if (u_pw === searchMemberPW(signInedMemberId)) {
            let confirmation = confirm('정말 탈퇴하시겠습니까');
            if (confirmation){
                deleteProfile(signInedMemberId);
                alert('삭제되었습니다.');
            }
        }
    })
    /* FUNCTION CLICK EVENT END*/
}