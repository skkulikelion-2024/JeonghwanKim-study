import Button from "./button";
import styles from "./app.module.css"

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome back</h1>
      <Button text = {"continue"}/>
    </div>
  );
}

export default App;
