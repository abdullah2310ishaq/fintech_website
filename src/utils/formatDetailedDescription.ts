function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function isHtmlContent(text: string): boolean {
  return /<[a-z][\s\S]*>/i.test(text);
}

function plainTextToHtml(text: string): string {
  const normalized = text.replace(/\r\n/g, "\n");
  const lines = normalized
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  const parts: string[] = [];
  let inList = false;

  const closeList = () => {
    if (inList) {
      parts.push("</ul>");
      inList = false;
    }
  };

  lines.forEach((line) => {
    if (/^[-*]\s*/.test(line)) {
      if (!inList) {
        parts.push('<ul class="service-bullet-list">');
        inList = true;
      }
      const cleaned = line.replace(/^[-*]\s*/, "").trim();
      parts.push(
        `<li class="service-bullet-item"><strong>${escapeHtml(cleaned)}</strong></li>`
      );
    } else if (/^(?:●|•)\s*/.test(line)) {
      if (!inList) {
        parts.push('<ul class="service-bullet-list">');
        inList = true;
      }
      const cleaned = line.replace(/^(?:●|•)\s*/, "").trim();
      parts.push(
        `<li class="service-bullet-item">${escapeHtml(cleaned)}</li>`
      );
    } else {
      closeList();
      parts.push(`<p>${escapeHtml(line)}</p>`);
    }
  });

  closeList();
  return parts.join("");
}

function normalizeBoldMarkup(html: string): string {
  return html
    .replace(/<b(\s[^>]*)?>/gi, "<strong$1>")
    .replace(/<\/b>/gi, "</strong>")
    .replace(
      /<span[^>]*style="[^"]*font-weight:\s*(?:bold|700|600)[^"]*"[^>]*>([\s\S]*?)<\/span>/gi,
      "<strong>$1</strong>"
    );
}

export function getDetailedDescriptionHtml(text?: string): string {
  if (!text) return "";
  const html = isHtmlContent(text) ? text : plainTextToHtml(text);
  return normalizeBoldMarkup(html);
}
