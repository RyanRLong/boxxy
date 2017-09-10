
const container = new Container(10, "30%");
for (let i = 0; i < 30; i++) {
  setTimeout(() => {
    if (Math.round(Math.random(), 0) > 0) {
      new Box(container, 'green');
    } else {
      new Box(container, 'red');
    }
  }, 100 * i);
}