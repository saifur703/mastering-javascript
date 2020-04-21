// Constructor Function
function UserInfo(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  return;
}
const name1 = new UserInfo('Saifur', 'Rahman');
console.log(name1);

// Object
const video = {
  title: 'Video',
  tags: ['a', 'b', 'c', 'd', 'e'],
  showTags: function () {
    this.tags.forEach(function (tag) {
      console.log(tag);
    });
  },
  play() {
    return this;
  },
};

video.stop = function () {
  return this;
};
video.showTags();
