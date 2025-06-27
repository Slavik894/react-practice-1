type Callback = (string: string) => void;

function sendDoneStatus(callback: Callback) {
  callback("done");
}
