// 버튼 0 누르면 
// 1. 모든 버튼에 붙은 orange 클래스명 제거
// 2. 버튼 0에 orange 클래스명 추가
// 3. 모든 div에 붙은 show 클래스명 추가
// 4. div0에 show 클래스명 추가

var tabNum = $('.tab-button').length;
var tabButton = $('.tab-button');
var tabContent = $('.tab-content')

for (let i = 0; i < tabNum; i++) {
    $('.tab-button').eq(i).on('click', () => {
        tabButton.removeClass('orange');
        tabContent.removeClass('show');
        tabButton.eq(i).addClass('orange');
        tabContent.eq(i).addClass('show');
    });
}