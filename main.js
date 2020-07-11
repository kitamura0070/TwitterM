"use strict";

{
  const ClickedFollow = document.querySelector("ClickedFollow");
  const ClickedFollowing = document.getElementById("ClickedFollowing");
  const Modal = document.getElementById("Modal");
  const Mask = document.querySelector("Mask");
  const ScrollLock = document.documentElement;

  ClickedFollowing.addEventListener("click", () => {
    Modal.classList.remove("Hidden");
    ScrollLock.classList.add("ScrollLock");
  });

  /*
  //プロフィール読み込み
  class Prof {
    constructor(
      HeaderImg,
      IconImg,
      Name,
      Comment,
      FollowNumber,
      FollowerNumber
      ) {
        this.headerimg = HeaderImg;
        this.iconimg = IconImg;
        this.name = Name;
        this.comment = Comment;
        this.follownumber = FollowNumber;
        this.followernumber = FollowerNumber;
      }
      show() {
        document.write(`${this.headerimg}-${this.iconimg}`);
      }
    }
    
    const Profs = [
      new Prof(
        "<img src='img/Prof/headimg.jpg'>",
        "<img src='img/Prof/icon.jpg'>"
        ),
      ];
      Profs[0].show();
    
    */
}
