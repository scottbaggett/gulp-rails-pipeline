import message from './message';

class Main {
  constructor() {
    console.info(message());
  }
}

$(function(){
  new Main();
});
