function delay(t) {
  return new Promise(function(resolve) {
    return setTimeout(resolve, t)
  })
}

function say(text){
  console.log(text)
}

say('before')
delay(2000).then(() => say('in between'))
say('after')
