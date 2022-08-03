const modeOne = [
{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];


function changeColor() {

}

function App() {
  const [activeKey, setActiveKey] = React.useState("Press any key!");
  React.useEffect(() => {
    document.addEventListener('keydown', event => {
      playSound(event.key.toUpperCase());
    });
  }, []);




  function playSound(selectedKey) {
    const audio = document.getElementById(selectedKey);
    audio.play();
    setActiveKey(selectedKey);
  }
  return /*#__PURE__*/(
    React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
    React.createElement("div", { id: "display" }, /*#__PURE__*/React.createElement("header", null, activeKey)), /*#__PURE__*/
    React.createElement("div", { id: "drum-pads" },
    modeOne.map((drumPad) => /*#__PURE__*/
    React.createElement("div", { key: drumPad.src }, /*#__PURE__*/
    React.createElement("div", { className: "drum-pad",
      id: drumPad.id,
      onClick: () =>
      {playSound(drumPad.keyTrigger);} }, /*#__PURE__*/
    React.createElement("h1", null, drumPad.keyTrigger), /*#__PURE__*/
    React.createElement("audio", { className: "clip",
      id: drumPad.keyTrigger,
      src: drumPad.url })))))));






}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#app'));