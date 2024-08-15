function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    // Convert the string to all uppercase
    const shoutString = string.toUpperCase();
  
    // Log the uppercase string to the console
    console.log(shoutString);
  }
  function logWhisper(string) {
    // Convert the string to all lowercase
    const whisperString = string.toLowerCase();
  
    // Log the lowercase string to the console
    console.log(whisperString);
  }
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    }
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
} 