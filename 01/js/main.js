$(()=>{
    console.log($);
    console.log('2024.03.22.\n기본 애니메이션');

    const box1 = $('#section1 .parallax__item__img');
    const box2 = $('#section2 .parallax__item__img');
    const box3 = $('#section3 .parallax__item__img');
    const box4 = $('#section4 .parallax__item__img');
    const box5 = $('#section5 .parallax__item__img');
    const box6 = $('#section6 .parallax__item__img');
    const box7 = $('#section7 .parallax__item__img');
    const box8 = $('#section8 .parallax__item__img');
    const box9 = $('#section9 .parallax__item__img');

    /* 01 */
    gsap.to(box1, {
        x: 400,
        duration: 2,
        'border-radius': '300',
        'rotation': 360
    });
});