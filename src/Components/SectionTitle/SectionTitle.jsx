import { useEffect } from "react";
import SectionTitleStyleWrapper from "./SectionTitle.style";
import Splitting from "splitting";
import ScrollOut from "scroll-out";

const SectionTitle = ({
  title,
  subtitle,
  alignment,
  titleMaxW,
  parentClass,
  titleMargin,
  subtitleClass,
  titleClass,
  titleStyle,
  subtitleStyle,
}) => {
  useEffect(() => {
    Splitting();
    ScrollOut({
      targets: "[data-splitting]",
    });
  }, []);

  return (
    <SectionTitleStyleWrapper
      style={{ textAlign: alignment, maxWidth: titleMaxW, margin: titleMargin }}
      className={parentClass}
      {...(parentClass === "defi" && { "data-splitting": true })}
    >
      {subtitle && (
        <span className={`sub-title ${subtitleClass}`} style={subtitleStyle}>{subtitle}</span>
      )}
      {title && <h2 className={`title ${titleClass}`} style={titleStyle}>{title}</h2>}
    </SectionTitleStyleWrapper>
  );
};

export default SectionTitle;
