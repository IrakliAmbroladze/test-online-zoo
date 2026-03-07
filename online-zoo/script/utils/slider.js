export const slider = () => {
  const left_arrow = document.getElementById("sldr_left_arr");
  const right_arrow = document.getElementById("sldr_right_arr");
  const slider = document.getElementById("slider");
  const rect = slider.getBoundingClientRect();
  const slider_width = slider.offsetWidth;
  const xCoordinate = rect.left;
  const container = document.getElementById("pets-container");
  const viewport = container.offsetWidth - xCoordinate * 2; //deducting padding
  const slider_overflow = slider_width - viewport;
  const slider_styles = window.getComputedStyle(slider);
  const gap = slider_styles.getPropertyValue("gap");
  const gap_number = Number(gap.slice(0, -2));
  const card_width = document.querySelector(".animals-card").offsetWidth;

  let counter = 0;
  const step_width = card_width + gap;
  left_arrow.addEventListener("click", () => {
    if (counter > -1) {
      return;
    }
    counter++;
    console.log(counter);
    console.log("clicked on left arrow");
    slider.style.transform = `translate(${counter * step_width}px)`;
  });
  right_arrow.addEventListener("click", () => {
    if (counter < 0) {
      return;
    }
    counter--;
    console.log(counter);
    console.log("clicked on right arrow");
    slider.style.transform = `translate(${counter * step_width}px)`;
  });
};
