const collections = [
    {
        img: 'https://cdn.magiceden.io/rs:fill:640:640:0:0/plain/https://taiyorobotics.s3-us-west-1.amazonaws.com/images/4cdd752ce8f03e9cb2725b65dba9fecc.png',
        creator: 'Taiyo Robotics',
        category: 'Pixel',
        price: '1 SOL',
        type: 'Popular'
    },
    {
        img: 'https://cdn.magiceden.io/rs:fill:640:640:0:0/plain/https://www.arweave.net/XAk4cVRmK_zGn-clcZgWbOhFZ8YaK4wYZQwzhzpCQG8?ext=png',
        creator: 'Devil Kidz',
        category: 'Art',
        price: '7 SOL',
        type: 'New'
    },
    {
        img: 'https://cdn.magiceden.io/rs:fill:640:640:0:0/plain/https://www.arweave.net/LXnQjm5RHkKoyRrd2QXOfMOlxeVlKavULHV8zM9UZRs?ext=png',
        creator: 'THUG',
        category: 'Pixel',
        price: '30 SOL',
        type: 'New'
    },
    {
        img: 'https://cdn.magiceden.io/rs:fill:640:640:0:0/plain/https://bafybeiebd7edpcjzdl7imtg6dwcdmfb7cg7rbumrgmzvasbp7qenrhexiy.ipfs.dweb.link/6109.png',
        creator: 'BOBO',
        category: 'Game',
        price: '3 SOL',
        type: 'Popular'
    },
    {
        img: 'https://cdn.magiceden.io/rs:fill:640:640:0:0/plain/https://arweave.net/hMPm6mN_hBKUt8ZciPuG5IFuDnLpVWoT97YWc0ZFy2c',
        creator: 'Aurorian',
        category: 'Game',
        price: '10 SOL',
        type: 'New'
    },
    {
        img: 'https://cdn.magiceden.io/rs:fill:640:640:0:0/plain/https://arweave.net/uiY4eYcYndwOUH6DoR0w-JMgDTlfIEWatEP2mCuLbYQ?ext=png',
        creator: 'Cubits',
        category: 'Art',
        price: '2 SOL',
        type: 'Popular'
    },
    {
        img: 'https://cdn.magiceden.io/rs:fill:640:640:0:0/plain/https://arweave.net/y-_j-dIV7Cj00B01M_7jUwGqNy0YyQwp9OkUPss0U2I',
        creator: 'SMB',
        category: 'Pixel',
        price: '200 SOL',
        type: 'Popular'
    },
    {
        img: 'https://cdn.magiceden.io/rs:fill:640:640:0:0/plain/https://arweave.net/-Hs63VutfqRDV7JqHCJOP0ypIiDSJHW5kx_yROhxDW0',
        creator: 'Degen Ape',
        category: 'DAO',
        price: '20 SOL',
        type: 'New'
    },
    {
        img: 'https://cdn.magiceden.io/rs:fill:640:640:0:0/plain/https://www.arweave.net/AUt0fC_a6Wnb_8YRp4MFsd2B_Z8QT_dwH0-6PdIbgk8?ext=png',
        creator: 'Friendly Frog',
        category: 'DAO',
        price: '4 SOL',
        type: 'Popular'
    },
    {
        img: 'https://metadata-temp-api.spacerunners.com/images/2525',
        creator: 'Space Runners',
        category: 'Game',
        price: '5 SOL',
        type: 'New'
    },
    {
        img: 'https://cdn.magiceden.io/rs:fill:640:640:0:0/plain/https://www.arweave.net/HCQwC7yj3tQJKsePGcgwKr9Y-eSnR3YYAB8ImkSx2Kw?ext=png',
        creator: 'SOLGods',
        category: 'Art',
        price: '10 SOL',
        type: 'Popular'
    },
    {
        img: 'https://cdn.magiceden.io/rs:fill:640:640:0:0/plain/https://bafybeibzjxisj76dselz25ar46wrn4cgpjwlidcibyslrn2s5a36w4vacm.ipfs.dweb.link/601.png',
        creator: 'Botborg',
        category: 'Game',
        price: '5 SOL',
        type: 'New'
    }
]

const button = document.querySelectorAll('.category button')

const collectionsItem = document.querySelector('.collectionsItem');
collectionsItem.innerHTML = '';

for (let i = 0; i < button.length; i++){
    button[i].onclick = () => {
        let y = 0
        while (y < button.length){
            button[y++].classList.remove('active')
            collectionsItem.innerHTML = '';
        }
        button[i].className = 'active'
        if (button[i].innerHTML == 'All'){
            collections.forEach(item => {
                collectionsItem.innerHTML += `
                    <div class="item">
                        <img src="${item.img}">
                        <h1>${item.creator}</h1>
                        <h2>${item.category}</h2>
                        <p>Floor price ${item.price}</p>
                        <a href="#">Explore Collection</a>
                    </div>
                `;
            });
        }
        else if (button[i].innerHTML == 'Popular'){
            collections.forEach(item => {
                if (item.type == 'Popular'){
                    collectionsItem.innerHTML += `
                        <div class="item">
                            <img src="${item.img}">
                            <h1>${item.creator}</h1>
                            <h2>${item.category}</h2>
                            <p>Floor price ${item.price}</p>
                            <a href="#">Explore Collection</a>
                        </div>
                    `;
                }
            });
        }
        else if (button[i].innerHTML == 'New'){
            collections.forEach(item => {
                if (item.type == 'New'){
                    collectionsItem.innerHTML += `
                        <div class="item">
                            <img src="${item.img}">
                            <h1>${item.creator}</h1>
                            <h2>${item.category}</h2>
                            <p>Floor price ${item.price}</p>
                            <a href="#">Explore Collection</a>
                        </div>
                    `;
                }
            });
        }
    }
}




collections.forEach(item => {
    collectionsItem.innerHTML += `
        <div class="item">
            <img src="${item.img}">
            <h1>${item.creator}</h1>
            <h2>${item.category}</h2>
            <p>Floor price ${item.price}</p>
            <a href="#">Explore Collection</a>
        </div>
    `;
});




const h2 = document.querySelectorAll('.collectionsItem .item h2');
try {
    for (let i = 0; i < collections.length; i++){
        if (h2[i].textContent == 'Pixel'){
            h2[i].style.backgroundColor = 'rgba(255, 0, 0, 0.3)'
        }
        else if (h2[i].textContent == 'Art'){
            h2[i].style.backgroundColor = 'rgba(0, 255, 0, 0.3)'
        }
        else if (h2[i].textContent == 'Game'){
            h2[i].style.backgroundColor = 'rgba(0, 0, 255, 0.3)'
        }
        else if (h2[i].textContent == 'DAO'){
            h2[i].style.backgroundColor = 'rgba(89, 0, 255, 0.3)'
        }
        else{
            h2[i].style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
        }
    }
} catch (err) {
    //
}

