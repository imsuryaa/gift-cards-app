//for react testing
//https://github.com/facebookincubator/create-react-app/issues/3199#issuecomment-332842582

// global is nothhing but window in browser


// mocking requestAnimationFrame as we don't have browser
const raf = global.requestAnimationFrame = (cb) => {
    setTimeout(cb, 0)
}
  
export default raf