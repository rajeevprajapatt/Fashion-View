var splide = new Splide('.splide', {
    perPage: 4,
    gap: '5rem',
    perMove: 1,
    padding: '7rem',
    type: 'loop',
    breakpoints: {
        640: {
            perPage: 2,
            gap: '.7rem',
            // height: '6rem',
        },
        480: {
            perPage: 1,
            gap: '.7rem',
            // height: '6rem',
        },
    },
});

splide.mount();
