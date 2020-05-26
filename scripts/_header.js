function handleToggle({
  currentTarget,
  path
}) {
  try {
    const senderIndex = path.findIndex(el => el === currentTarget)
    if (senderIndex === -1) return undefined

    const {
      dataset: {
        toggleSender: value
      }
    } = path
      .slice(0, senderIndex)
      .find(el => el.dataset && el.dataset.toggleSender)

    document
      .querySelectorAll(`[data-toggle-receiver="${value}"]`)
      .forEach(el => el.classList.toggle('__hide'))

  } catch (e) {}
}
