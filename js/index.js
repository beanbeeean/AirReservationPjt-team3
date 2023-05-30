document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM READY!!!!');

    init();
});


const init = () => {
    console.log('init() CALLED!!!');

    addEventsProfile();

    initViews();
}