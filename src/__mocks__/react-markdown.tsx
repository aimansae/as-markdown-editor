import React from "react";

interface ReactMarkdownProps {
  children: React.ReactNode;
}

function ReactMarkdown({ children }: ReactMarkdownProps) {
  return <>{children}</>;
}

export default ReactMarkdown;
