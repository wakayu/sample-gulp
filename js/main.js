window.onload = () => {
    // setTimeout(() => {
    //     const spinner = document.getElementById('loading');
    //     spinner.classList.add('loaded');
    // },2000);
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}

let isActive = false;
$('.menu-trigger').on('click',() => {
    if(!isActive) {
        $('.menu-trigger').addClass('active');
        $('.menu-trigger').prev().removeClass('none');
        return isActive = true;
    }
    $('.menu-trigger').removeClass('active');
    $('.menu-trigger').prev().addClass('none');
    return isActive = false;
})