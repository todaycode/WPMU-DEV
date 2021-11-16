import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormHelperText-contained": {
      marginLeft: "0px !important"
    }
  },
  formMargin:{
    margin: "12px 0 12px 0 !important"
  },
  step: {
    position: "absolute",
    top: "40px",
    right: "40px",
    fontWeight: "800"
  },
  title: {
    marginBottom: "40px"
  },
  stepText: {
    paddingRight: "15px"
  },
  filledbullet: {
    padding: "5px"
  },
  bullet: {
    padding: "5px",
    opacity: "0.4"
  },
  placeholder: {
    color: "#aaa"
  },
  container: {
    height: "100vh"
  },
  content: {
    justifyContent: "center",
    position: "relative",
  },
  dummy: {
    justifyContent: "center",
    color: "white",
    background: "#286EFA"
  },
  button: {
    color: "white",
    background: "#286EFA",
    margin: "12px 0 12px 0 !important"
  },
  link: {
    color: "#286EFA",
  },
  bottomText: {
    fontSize: "0.75rem",
    lineHeight: "24px",
    textAlign: "justify"
  },
  sideView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "300px"
  },
  lineHeight: {
    lineHeight: "24px"
  }
})); 

export default useStyles;