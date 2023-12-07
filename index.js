const Notification = (props) => {
  //  Write your code here.
  const { imgUrl, imgCls, className, text } = props.source;
  return (
    <div className="msg-card" className={className}>
      <img src={imgUrl} className={imgCls} />
      <p>{text}</p>
    </div>
  );
};

const sourcePrimary = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
  imgCls: "icon-logo",
  className: "inform-text",
  text: "information Message",
};
const sourceSuccess = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/success-icon-img.png",
  imgCls: "icon-logo",
  className: "success-text",
  text: "Success Message",
};
const sourceWarning = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png",
  imgCls: "icon-logo",
  className: "warning-text",
  text: "Warning Message",
};
const sourceError = {
  imgUrl: "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png",
  imgCls: "icon-logo",
  className: "error-text",
  text: "Error Message",
};
const element = (
  //  Write your code here.
  <div className="notification-container">
    <h1>Notifications</h1>
    <Notification source={sourcePrimary} />
    <Notification source={sourceSuccess} />
    <Notification source={sourceWarning} />
    <Notification source={sourceError} />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
