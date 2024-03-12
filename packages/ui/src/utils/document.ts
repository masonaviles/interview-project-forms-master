/**
 * Enable document events, such as scrolling and pointer events.
 * This is a helper function when work with modals, drawers, etc. to prevent user from interacting with the document.
 */
export function disableDocumentEvents(pointerEvents = 'none', overflow = 'hidden') {
  document.body.style.pointerEvents = pointerEvents
  document.body.style.overflowY = overflow
}

/**
 * Enable document events, such as scrolling and pointer events.
 */
export function enableDocumentEvents(pointerEvents = 'auto', overflow = 'auto') {
  document.body.style.pointerEvents = pointerEvents
  document.body.style.overflowY = overflow
}
