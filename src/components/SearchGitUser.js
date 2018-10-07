class SearchGitUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: '',
    }
  }

  searchGitUser(event) {
    let userName = event.target.value;
    if (userName.length) {
      fetch(`https://api.github.com/users/${userName}`)
        .then(response => {
          if (response.ok) {
            return response.json()
          }
          throw new Error('Network response was not ok.');
        })
        .then(userProfile => {
          // JSON.parse(getItemInLocalStorage('getGitUsers'));
          const login = userProfile.login;
          this.setState({
            userProfile: {
              ...this.state.userProfile,
              [login]: userProfile
            }
          });
          console.log(this.state.userProfile)
          // const userData = JSON.stringify({
            //   ...this.state.userProfile,
          //   [login]: userProfile,
          // });
          // setItemInLocalStorage('getGitUsers', userData);
        })
        .catch(error => console.log("Error: ", error));
    }
  }

  render() {
    return (
      <div className="container">
        <div className="searchUser">
          <input type="text" className="searchGitUser" onBlur={(event) => this.searchGitUser(event)} placeholder="Search github users here..." />
        </div>
        <div className="d-flex showUserProfile">
        </div>
      </div>
    );
  }
}

export default SearchGitUser;