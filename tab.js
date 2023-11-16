// 버튼 0 누르면 
// 1. 모든 버튼에 붙은 orange 클래스명 제거
// 2. 버튼 0에 orange 클래스명 추가
// 3. 모든 div에 붙은 show 클래스명 추가
// 4. div0에 show 클래스명 추가

var tabNum = $('.tab-button').length;

$('.tab-button').eq(0).on('click', () => {
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(0).addClass('orange');
    $('.tab-content').eq(0).addClass('show');
});

$('.tab-button').eq(1).on('click', () => {
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(1).addClass('orange');
    $('.tab-content').eq(1).addClass('show');
});

$('.tab-button').eq(2).on('click', () => {
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(2).addClass('orange');
    $('.tab-content').eq(2).addClass('show');
});

