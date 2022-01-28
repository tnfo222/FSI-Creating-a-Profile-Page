let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')  
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.querySelector('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.querySelector('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')

let dogDetails = document.querySelector('div')
dogDetails.setAttribute('class', 'dog-details')

dogContent.append(dogImage, dogDetails)

let bodyHeader = document.createElement('h3')
bodyHeader.append('Description:')

let bodyParagraph = document.createElement('p')
bodyParagraph.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')

let listHeader = document.createElement('h3')
listHeader.append('Feeding Times:')

let feedingList = document.createElement('ul')

let feedingTime1 = document.createElement('li')
feedingTime1.append('9:00 am')

let feedingTime2 = document.createElement('li')
feedingTime2.append('12:00 pm')

let feedingTime3 = document.createElement('li')
feedingTime3.append('5:00 pm')

feedingList.append(feedingTime1)
feedingList.append(feedingTime2)
feedingList.append(feedingTime3)

dogDetails.append(bodyHeader)
dogDetails.append(bodyParagraph)
dogDetails.append(listHeader)
dogDetails.append(feedingList)
