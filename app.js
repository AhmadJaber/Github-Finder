const searchUser = document.getElementById("search-user");
const github = new Github();
const ui = new UI();

searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        ui.showAlert("User Not Found!", "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepo(data.repos);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
