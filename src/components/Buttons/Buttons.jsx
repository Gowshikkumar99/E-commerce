import React from "react";

export function Button({ text, icon, route, variant, notification }) {
  const icon_name = `icon-${icon}`;
  const btn_variant = `--${variant}`;
  return (
    <>
      <div className={`buttons ${btn_variant} ${text ===""?'--only-icon':''}`}>
        {text === "" ? "" : <span className="button-text">{text}</span>}
        <div className="icon">
        <span className={icon_name}></span>
        </div>
        {notification>0? <span className="notification-item">{notification}</span>:''}
      </div>
    </>
  );
}
