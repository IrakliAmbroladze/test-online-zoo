export const slider = () => {
  const left_arrow = document.getElementById("sldr_left_arr");
  const right_arrow = document.getElementById("sldr_right_arr");
  left_arrow.addEventListener("click", () => {
    console.log("clicked on left arrow");
  });
  right_arrow.addEventListener("click", () => {
    console.log("clicked on right arrow");
  });
};
