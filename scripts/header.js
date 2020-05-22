document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header')

  header.addEventListener('click', handleToggle)
})

function handleToggle({ currentTarget: catalyst, path }) {
  try {
    const { dataset: { toggleSender } } = getSenderFromPath(catalyst, path)

    document
      .querySelectorAll(`[data-toggle-receiver="${toggleSender}"]`)
      .forEach(el => el.classList.toggle('hide'))
  } catch (e) {
    console.error(e);
  }
}

function getSenderFromPath(catalyst, path) {
  const senderIndex = path.findIndex(el => el === catalyst)

  if (!senderIndex) return undefined

  const catalystToSenderPath = path.slice(0, senderIndex)
  return catalystToSenderPath.find(el => el.dataset && el.dataset.toggleSender)
}
