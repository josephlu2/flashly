import { Link } from 'react-router-dom'

const ModeSelect = () => {
  
  return (
    <div style = {Styles.container} className="mode-select">
        <button style = {Styles.button}>Flashcard Mode</button>
        <button style = {Styles.button}>Quizzie Mode</button>
        <button style = {Styles.button}>Write Mode</button>
    </div>
  )
}

export default ModeSelect

const Styles = {
    container: {
      backgroundColor: "#f6f7fb",
      flexDirection: "column",
    },
    button: {
        backgroundColor: "#f6f7fb",
    }
  }