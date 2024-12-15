document.addEventListener("DOMContentLoaded", () =>{
    const popularData = [
        {
            name:'Moletom',
            price: '$ 204.90',
            image: './assets/popular1.svg',
        },
        {
            name:'Puffer',
            price: '$ 175.69',
            image: './assets/popular2.svg',
        },
        {
            name:'Baggy',
            price: '$ 99.60',
            image: './assets/popular3.svg',
        },
        {
            name:'Shorts',
            price: '$ 300.50',
            image: './assets/popular4.svg',
        },
        {
            name:'Camisa',
            price: '$ 218.90',
            image: './assets/popular5.svg',
        },
        {
            name:'Moletom',
            price: '$ 457.89',
            image: './assets/popular6.svg',
        },
        {
            name:'Jaqueta',
            price: '$ 329.90',
            image: './assets/popular7.svg',
        },

    ];

    const shirtsData = [
        {
            name:'Camiseta',
            price: '$ 294.45',
            image: './assets/shirt1.svg',
        },
        {
            name:'Camiseta',
            price: '$ 374.90',
            image: './assets/shirt2.svg',
        },
        {
            name:'Camiseta',
            price: '$ 174.44',
            image: './assets/shirt3.svg',
        },
        {
            name:'Camiseta',
            price: '$ 189.90',
            image: './assets/shirt4.svg',
        },
        {
            name:'Camiseta',
            price: '$ 390.00',
            image: './assets/shirt5.svg',
        },
        {
            name:'Camiseta',
            price: '$ 128.59',
            image: './assets/shirt6.svg',
        },
    ];

    const acessoriesData = [
        {
            name:'Boné',
            price: '$ 57.32',
            image: './assets/acessorie1.svg',
        },
        {
            name:'Boné',
            price: '$ 32.90',
            image: './assets/acessorie2.svg',
        },
        {
            name:'Sholder Bag',
            price: '$ 64.22',
            image: './assets/acessorie3.svg',
        },
        {
            name:'Gorro',
            price: '$ 43.90',
            image: './assets/acessorie4.svg',
        },
        {
            name:'Bucket',
            price: '$ 84.39',
            image: './assets/acessorie5.svg',
        },
        {
            name:'óculos Y2K',
            price: '$ 70.90',
            image: './assets/acessorie6.svg',
        },
    ];

    const allData = [
        ...popularData.map(item => ({ ...item, category: "popular" })),
        ...shirtsData.map(item => ({ ...item, category: "shirts" })),
        ...acessoriesData.map(item => ({ ...item, category: "acessories" })),
    ];

    const popularGrid = document.querySelector(".popular-grid")
    const shirtsGrid = document.querySelector(".shirts-grid")
    const acessoriesGrid = document.querySelector(".acessories-grid")

    popularData.forEach(popular => {
        const popularCard = document.createElement("div")
        popularCard.classList.add("card")

        popularCard.innerHTML = `
        <img src="${popular.image}">
        <div>
        <h3>${popular.name}</h3>
        <p>${popular.price}</p>
        </div>
        `
        popularGrid.appendChild(popularCard)
    })

    shirtsData.forEach(shirt => {
        const shirtCard = document.createElement("div")
        shirtCard.classList.add("card")

        shirtCard.innerHTML = `
        <img src="${shirt.image}">
        <div>
        <h3>${shirt.name}</h3>
        <p>${shirt.price}</p>
        </div>
        `
        shirtsGrid.appendChild(shirtCard)
    })

    acessoriesData.forEach(acessorie => {
        const acessorieCard = document.createElement("div")
        acessorieCard.classList.add("card")

        acessorieCard.innerHTML = `
        <img src="${acessorie.image}">
        <div>
        <h3>${acessorie.name}</h3>
        <p>${acessorie.price}</p>
        </div>
        `
        acessoriesGrid.appendChild(acessorieCard)
    })
})

