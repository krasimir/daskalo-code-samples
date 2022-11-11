var user = {
  name: 'Krasimir',
  age: 1,
  registered: true,
  skills: ['html', 'css', 'javascript', 'nodejs']
}

user.skills.forEach((element, index, arr) => {
  console.log(element, index);
});