let wantedList = [];

function add(user, message, interaction) {
  // Check if the user is already in the wanted list
  // const existingEntry = wantedList.find(item => item.user.id === user.id);
  // if (existingEntry) {
  //   // If the user is already in the list, update the message
  //   existingEntry.message = message;
  //   existingEntry.interaction = interaction;
  //   return;
  // }
  wantedList.push({ user, message, interaction });
}

function clear() {
  wantedList = [];
}

function getList() {
  return wantedList;
}

module.exports = {
  add,
  clear,
  getList,
};