// to Send Request
const btn = document.querySelector("#mbtn");
const allInputs = document.querySelectorAll(".allit");
const dmessage = document.querySelector("#dmessage");
const nameit = document.querySelector("#nameInput");

btn.addEventListener("click", (eo) => {
    const nameit = document.querySelector("#nameInput").value;
    const peopleit = document.querySelector("#peopleInput").value;
  const dateit = document.querySelector("#dateInput").value;

  if (nameit.length == 0 || peopleit.length == 0 || dateit.length == 0) {
    cuteAlert({
      type: "error",
      title: "Please, input all forms",
      message: "",
      buttonText: "Okay",
    });
  } else if( nameit.length > 12 || peopleit > 5){
    cuteAlert({
        type: "error",
        title: "your name/people is to large",
        message: "",
        buttonText: "Okay",
      });
  } else {
        cuteAlert({
        type: "success",
        title: "Request Done Successfully",
        message: `Hello ${nameit} your table are reserved to ${peopleit} people at ${dateit}`,
        buttonText: "Okay",
        });
    }
});
