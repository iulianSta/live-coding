function Text() {
  return <div>Hey, I am a Component</div>;
}

function Hello(props) {
  console.log(props);
  return (
    <div>
      Welcome {props.userName} to react! I guess you have {props.userAge} years
      old and you come from {props.userCity}.<p>Your hobby's are:</p>
    </div>
  );
}
//export default Text;
export { Text, Hello };
