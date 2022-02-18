const auctions = [
    {
        img: 'https://cdn.magiceden.io/rs:fill:1280:1280:0:0/plain/https://bafybeibtdraxd25hj5qxb5ecu4rthk4e4fqqcka4tbogwdal2dh4dr3l5m.ipfs.dweb.link/collab1_small.png?ext=png',
        creator: 'SOLGods DAO',
        category: 'Art',
        bid: '3 SOL',
    },
    {
        img: 'https://cdn.magiceden.io/rs:fill:1000:1000:0:0/plain/https://arweave.net/BedhDS_wHPaf8FTcogMw1ISxISrwK8efkuTrGheiIM4?ext=png',
        creator: 'Dolphin',
        category: 'Game',
        bid: '10 SOL',
    },
    {
        img: 'https://cdn.magiceden.io/rs:fill:500:500:0:0/plain/https://www.arweave.net/2eAdiCQxatG-h81U4PtN2J9XKhfeKKYAKLtlFguNVyY?ext=png',
        creator: 'Legendary Zillaz',
        category: 'Pixel',
        bid: '100 SOL',
    }
]


const auctionsItem = document.querySelector('.auctionsItem');
auctionsItem.innerHTML = '';

auctions.forEach(item => {
    auctionsItem.innerHTML += `
        <div class="item">
            <img src="${item.img}">
            <h1>${item.creator}</h1>
            <h2>${item.category}</h2>
            <p>Current Bid ${item.bid}</p>
            <a href="#">Bid NFT</a>
        </div>
    `;
});

const h2A = document.querySelectorAll('.auctionsItem .item h2');
try {
    for (let i = 0; i < auctions.length; i++){
        if (h2A[i].textContent == 'Pixel'){
            h2A[i].style.backgroundColor = 'rgba(255, 0, 0, 0.3)'
        }
        else if (h2A[i].textContent == 'Art'){
            h2A[i].style.backgroundColor = 'rgba(0, 255, 0, 0.3)'
        }
        else if (h2A[i].textContent == 'Game'){
            h2A[i].style.backgroundColor = 'rgba(0, 0, 255, 0.3)'
        }
        else if (h2A[i].textContent == 'DAO'){
            h2A[i].style.backgroundColor = 'rgba(89, 0, 255, 0.3)'
        }
        else{
            h2A[i].style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
        }
    }
} catch (err) {
    //
}