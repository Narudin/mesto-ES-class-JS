class UserInfo {
  constructor(userName, userAbout) {
    this.userName = userName;
    this.userAbout = userAbout;
  }

  setUserInfo = (name, about) => {
    this.name = name;
    this.about = about;
  };

  updateUserInfo = () => {
    this.userName.textContent = this.name;
    this.userAbout.textContent = this.about;
  };
}
