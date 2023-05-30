const SIGN_UP_VIEW = 1;
const SIGN_IN_VIEW = 2;
const SIGN_OUT_VIEW = 3;
const EDIT_PROFILE_VIEW = 4;


let signUpWrap = '';
let signInWrap = '';
let editWrap = '';


const initViews = () => {
    console.log('initViews() CALLED!!!');

    signUpWrap = document.querySelector('div.sign_up_wrap');
    signInWrap = document.querySelector('div.sign_in_wrap');
    editWrap = document.querySelector('div.sign_modify_wrap');
}


const showSelectedView = (viewNo) => {
    console.log('showSelectedView() CALLED!!!');

    switch (viewNo) {
        case SIGN_UP_VIEW:
            signUpWrap.style.display = 'block';
            signInWrap.style.display = 'none';
            editWrap.style.display = 'none';

            break;
        case SIGN_IN_VIEW:
        case SIGN_OUT_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'block';
            editWrap.style.display = 'none';

            break;
        case EDIT_PROFILE_VIEW:
            signUpWrap.style.display = 'none';
            signInWrap.style.display = 'none';
            editWrap.style.display = 'block';

            break;
    }
}