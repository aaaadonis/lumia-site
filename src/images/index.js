const Images = {
    imageOne: require('./test.png'),
    imageTwo: require('./test2.png'),
    imageThree: require('./test3.png'),
}

const Data = [{
    id: 1,
    image: Images.imageOne,
    descrip: 'description',
    isOn: true
},
{
    id: 2,
    image: Images.imageTwo,
    descrip: 'description',
    isOn: false
},
{
    id: 3,
    image: Images.imageThree,
    descrip: 'description',
    isOn: false
}]

export {Images, Data};