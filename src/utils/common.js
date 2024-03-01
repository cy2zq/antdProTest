export function getClassNameRandom() {
  let animateList = [
    "animate__backInLeft",
    "animate__backInRight",
    "animate__backInTop",
    "animate__backInBottom",

    "animate__bounceInLeft",
    "animate__bounceInRight",
    "animate__fadeInDown",
    "animate__fadeInLeft",

    "animate__bounceIn",
    "animate__bounceInUp",
  ];
  return (
    "animate__animated " +
    ` ${animateList[parseInt(Math.random(0, 1) * animateList?.length)]}`
  );
}
