import { isValidElement } from "react";
import { Link as _Link, LinkProps } from "wouter";

export function Link(props: LinkProps) {
  const { to, href, children, onClick, ...rest } = props;

  // wouter tries to treat mailto links as regular URLs, and it tries to put
  // them into the browser history stack, which fails. So just use plain links
  // in that case.
  if ((to ?? href)?.toLowerCase().startsWith("mailto:")) {
    return <a {...props} />;
  }

  if (!isValidElement(children)) {
    return <_Link {...props} />;
  }

  return (
    <_Link to={to ?? href} onClick={onClick}>
      <a {...rest}>{children}</a>
    </_Link>
  );
}
