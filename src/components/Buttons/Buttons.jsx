import React from "react";

export function Button({ text, onlyIcon, icon, route, variant, notification }) {
  const icon_name = `icon-${icon}`;
  const btn_variant = `--${variant}`;
  return (
    <>
      <div className={`buttons ${btn_variant} ${onlyIcon ==="yes"?'--only-icon':''}`}>
        {onlyIcon === "yes" ? "" : <span className="button-text">{text}</span>}
        <div className="icon">
        <span className={icon_name}></span>
        </div>
        {notification>0? <span className="notification-item">{notification}</span>:''}
      </div>
    </>
  );
}
