import classes from './styles/LoadingSpinner.module.css';

export default function LoadingSpinner() {
  return (
    <div class={classes.spinnerContainer}>
        <div class={classes.spinner}></div>
    </div>
  )
}
