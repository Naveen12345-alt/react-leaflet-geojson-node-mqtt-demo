const mqtt = require('mqtt')
const data = require('./data/Directions_from_Delhi_to_Gurgaon_Haryana.json')
let count = 0
const client = mqtt.connect('mqtt://broker.hivemq.com', {clientId: 'mqttjs01'})
console.log('connected flag  ' + client.connected)
console.log(data.features[0].geometry.coordinates[1])

let message = JSON.stringify(data.features[0].geometry.coordinates[count])
const topic = 'testtopic'
// const message = 'test message'
//handle incoming messages
client.on('message', function (topic, message, packet) {
  console.log('topic is ' + topic)
})

client.on('connect', function () {
  console.log('connected  ' + client.connected)
})
//handle errors
client.on('error', function (error) {
  console.log("Can't connect" + error)
  process.exit(1)
})
//publish
function publish(topic, msg, options) {
  let msg2 = JSON.stringify(
    data.features[0].geometry.coordinates[count].reverse(),
  )
  console.log('publishing', msg2)
  if (client.connected == true) {
    client.publish(topic, msg2, options)
  }
  count += 1
  if (count === 619)
    //ens script
    clearTimeout(timer_id) //stop timer
  client.end()
}

//////////////

var options = {
  retain: true,
  qos: 1,
}

console.log('subscribing to topics')
client.subscribe(topic) //object
var timer_id = setInterval(function () {
  publish(topic, message, options)
}, 1000)
//notice this is printed even before we connect
console.log('end of script')