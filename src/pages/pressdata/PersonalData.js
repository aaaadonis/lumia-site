const Images = {
  imageOne: require("../../images/test.png"),
  imageTwo: require("../../images/test2.png"),
  imageThree: require("../../images/test3.png"),
};

const Data = [
  {
    id: 1,
    image: Images.imageOne,
    descrip: "personal-description1",
    isOn: true,
  },
  {
    id: 2,
    image: Images.imageTwo,
    descrip: "personal-description2",
    isOn: false,
  },
  {
    id: 3,
    image: Images.imageThree,
    descrip: "personal-description3",
    isOn: false,
  },
];

export { Images, Data };
