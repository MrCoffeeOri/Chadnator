const imagesLinks = ["https://c.tenor.com/mPV5tXDtDvQAAAAM/chad.gif", "https://images.uncyc.org/wikinet/3/32/Chad_sem_Virgin.png", "https://i.kym-cdn.com/entries/icons/original/000/031/015/cover5.jpg", "https://incels.wiki/images/thumb/6/64/Chadstride.png/400px-Chadstride.png"]
const tags = ["p", "span", "h1", "h2", "h3", "h4", "a"]

setInterval(() => {
    document.documentElement.querySelectorAll("img").forEach(img => {
        if (!imagesLinks.includes(img.src))
            img.src = imagesLinks[Math.floor(Math.random() * imagesLinks.length)];
    })
    tags.forEach(ele => document.querySelectorAll(ele).forEach(element => element.innerText = "CHAD"))
}, 1000)