class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
        <div class='card card-body mb-3'>
            <div class='row'>
                <div class='col-md-3'>
                    <img src="${user.avatar_url}" class='img-fluid mb-2'>
                    <a href='${
                      user.html_url
                    }' class='btn btn-primary btn-block mb-4' target="_blank">View Profile</a>
                </div>
                <div class='col-md-9'>
                    <span class="badge badge-primary">Public Repos: ${
                      user.public_repos
                    }</span>
                    <span class="badge badge-secondary">Public Gists: ${
                      user.public_gists
                    }</span>
                    <span class="badge badge-success">Followers: ${
                      user.followers
                    }</span>
                    <span class="badge badge-info">Followings: ${
                      user.following
                    }</span>
                    <br><br>

                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Name: ${user.name}</li>
                        <li class="list-group-item">Company: ${
                          user.company
                        }</li>
                        <li class="list-group-item">Website/Blog: ${
                          user.blog
                        }</li>
                        <li class="list-group-item">Location: ${
                          user.location
                        }</li>
                        <li class="list-group-item">Member Since: ${
                          user.created_at
                        }</li>
                    </ul>
                </div>
            </div>
        </div>

        <h3 class='page-heading mb-3'>Latest Repos</h3>
        <div id='repos'></div>
    `;
  }

  showRepo(repos) {
    let output = "";

    repos.forEach(repo => {
      output += `
        <div class='card card-body'>
          <div class='row'>
            <div class='col-md-6 text-center'>
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class='col-md-6 text-center'>
              <span class="badge badge-primary">Stars: ${
                repo.stargazers_count
              }</span>
              <span class="badge badge-primary">Watchers: ${
                repo.watchers_count
              }</span>
              <span class="badge badge-primary">Fork: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;

      document.getElementById("repos").innerHTML = output;
    });
  }

  showAlert(message, className) {
    this.clearError();

    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".search-container");
    const search = document.querySelector(".search");

    container.insertBefore(div, search);

    setTimeout(() => {
      this.clearError();
    }, 3000);
  }

  clearError() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
