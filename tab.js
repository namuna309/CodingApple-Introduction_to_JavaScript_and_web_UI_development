// 버튼 0 누르면 
// 1. 모든 버튼에 붙은 orange 클래스명 제거
// 2. 버튼 0에 orange 클래스명 추가
// 3. 모든 div에 붙은 show 클래스명 추가
// 4. div0에 show 클래스명 추가

var tabNum = $('.tab-button').length;
var tabButton = $('.tab-button');
var tabContent = $('.tab-content')

// for (let i = 0; i < tabNum; i++) {
//     openTab(i);
// }

$('.list').click((e) => {
    // 지금 누른게 버튼 0이면 탭열기 0
    // ...
    // for (let i = 0; i < tabNum; i++) {
    //     if( $('.tab-button').eq(i).is($(e.target))) {
    //         openTab(i)
    //     }

    // }
    // dataset활용
    openTab(e.target.dataset.id)
})

// function openTab(index) {
//     $('.tab-button').eq(index).on('click', () => {
//         tabButton.removeClass('orange');
//         tabContent.removeClass('show');
//         tabButton.eq(index).addClass('orange');
//         tabContent.eq(index).addClass('show');
//     });
// }

function openTab(index) {
    tabContent.removeClass('show');
    tabButton.removeClass('orange');
    tabContent.eq(index).addClass('show');
    tabButton.eq(index).addClass('orange');
}