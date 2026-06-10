import { useMemo } from "react";
import { getDetailedDescriptionHtml } from "../../utils/formatDetailedDescription";

interface RichTextContentProps {
  html?: string;
  className?: string;
}

export default function RichTextContent({
  html,
  className = "",
}: RichTextContentProps) {
  const content = useMemo(() => getDetailedDescriptionHtml(html), [html]);

  if (!content) return null;

  return (
    <div
      className={`rich-text-content ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
