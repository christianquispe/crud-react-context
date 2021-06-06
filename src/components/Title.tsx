import React from "react";
import classNames from "classnames";

export const tupleNum = <T extends number[]>(...args: T) => args;

const TITLE_ELE_LIST = tupleNum(1, 2, 3, 4, 5, 6);

interface ITitle
  extends React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
  > {
  level?: typeof TITLE_ELE_LIST[number];
}

const Title: React.FC<ITitle> = ({ className, children, level = 1, ...restProps }) => {
  const classes = classNames(className, {
    [`title-level-${level}`]: level,
    [`title-level-1`]: !level,
  });

  const Component = `h${level}` as any;

  return <Component className={classes} {...restProps}>{children}</Component>;
};

export default Title