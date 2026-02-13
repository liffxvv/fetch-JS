async function getInfo() {

    const comList = document.createElement('div')
    comList.classList.add('list')
    const loadingText = document.createElement('h1')
    loadingText.textContent = 'LOADING...'
    loadingText.classList.add('loading')
    document.body.append(loadingText)

    try {
        let data = await fetch('https://jsonplaceholder.typicode.com/comments')
        let res = await data.json()
        document.body.removeChild(loadingText)
        res.forEach((item) => {
            let { name, email, body } = item
            let infoBox = document.createElement('div')
            let infoName = document.createElement('h2')
            let link = document.createElement('a')
            let infoText = document.createElement('p')

            infoBox.classList.add('box')
            infoName.textContent = name
            link.textContent = email
            link.href = `mailto:${email}`
            infoText.textContent = body

            infoBox.append(infoName, link, infoText)
            comList.append(infoBox)
        });
        document.body.append(comList)

    } catch (error) {
        console.error(error);
    }
}

getInfo()