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
  const gap = Number(slider_styles.getPropertyValue("gap").slice(0, -2));
  const card_width = document.querySelector(".animals-card").offsetWidth;

  const step_width = card_width + gap;
  console.log(step_width);
  let accumulated_transformation = 0;
  left_arrow.addEventListener("click", () => {
    if (accumulated_transformation >= 0) return;
    accumulated_transformation += step_width;
    console.log(accumulated_transformation);
    slider.style.transform = `translate(${accumulated_transformation}px)`;
  });
  right_arrow.addEventListener("click", () => {
    if (-slider_overflow >= accumulated_transformation) return;
    accumulated_transformation -= step_width;
    console.log(accumulated_transformation);
    slider.style.transform = `translate(${accumulated_transformation}px)`;
  });
};
