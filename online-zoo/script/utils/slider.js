export const slider = () => {
  const left_arrow = document.getElementById("sldr_left_arr");
  const right_arrow = document.getElementById("sldr_right_arr");
  const slider = document.getElementById("slider");

  let counter = 0;
  const step_width = 50;
  left_arrow.addEventListener("click", () => {
    counter--;
    console.log(counter);
    console.log("clicked on left arrow");
    slider.style.transform = `translate(${counter * step_width}px)`;
  });
  right_arrow.addEventListener("click", () => {
    counter++;
    console.log(counter);
    console.log("clicked on right arrow");
    slider.style.transform = `translate(${counter * step_width}px)`;
  });
};
