let store = {
  _state: {
    profilePage: {
      posts: [
        { id: "1", likesCount: "3", message: "Hi, how are you" },
        {
          id: "2",
          likesCount: "21",
          message: "Its my life, its now for ever. and am gona be for ever",
        },
      ],
      newPostText: "ww",
    },
    dialogsPage: {
      dialogs: [
        { id: "Dimych", name: "Dimych" },
        { id: "Andrew", name: "Andrew" },
        { id: "Ivan", name: "Ivan" },
        { id: "Vasya", name: "Vasya" },
        { id: "Natawa", name: "Natawa" },
        { id: "Valera", name: "Valera" },
      ],
      messages: [
        { id: "1", message: "Hi" },
        { id: "2", message: "How is you it-kama" },
        { id: "3", message: "Yo" },
        { id: "4", message: "Yo" },
        { id: "5", message: "Yo" },
      ],
    },
  },
  getState: {
    return: this._state 
  },
  _callSubscriber() {
    console.log("state was changed");
  },
  addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 4,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
}

export default store;
window.state = store;
