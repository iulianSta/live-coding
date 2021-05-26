function Text() {
  return <div>Hey, I am a Component</div>;
}

function Hello(props) {
  console.log(props);
  return <div>Welcome {props.userName} to react</div>;
}
//export default Text;
export { Text, Hello };
