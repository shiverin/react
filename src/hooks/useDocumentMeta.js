import { useEffect } from "react";

export default function useDocumentMeta(meta) {
  useEffect(() => {
    if (!meta) return;
    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
  }, [meta]);
}
