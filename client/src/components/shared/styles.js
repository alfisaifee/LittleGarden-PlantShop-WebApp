import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  errorNotice: {
    width: "50%",
    margin: "2rem 0",
    padding: " 0.3rem",
    border: "1px solid #e07c7c",
    borderRadius: "8px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8d6d6",
  },
  errorNoticeButton: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#df4343",
    color: "#ffffff",
  },
}));
