fetch(`https://randomfox.ca/floof/.`)
  .then(response => response.json())
  .then(
    (convertedData) => {
       const foxImgElement = document.querySelector("#fox")
       foxImgElement.src = convertedData.image
    }
  )

const getTheCat = async () => {
    const response = await fetch(`http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false`)
    const convertedData = await response.json()
    const catImgElement = document.querySelector("#cat")
    catImgElement.src = convertedData[0]
}

getTheCat()

// fetch(`http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false`)
//   .then(response => response.json())
//   .then(
//     (convertedData) => {
//        const catImgElement = document.querySelector("#cat")
//        catImgElement.src = convertedData[0]
//     }
//   )


    // const response = await fetch(`http://shibe.online/api/cats?count=1&urls=true&httpsUrls=false`)
    // const convertedData = await response.json()
    // const catImgElement = document.querySelector("#cat")
    // catImgElement.src = convertedData[0]
