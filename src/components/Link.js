import React from 'react';

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // check if we hold ctrl key it will open in a new tab
    if (event.metaKey || event.ctrlKey) {
      return;
    }
  // prvent refreshing the page after clicking on any link 
    event.preventDefault();
  // save and change the url without refreshing the page 
    window.history.pushState({},'',href);

    // this function for linking the clicked limk with the intentioned component 
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
