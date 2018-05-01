class UIElement {
  element

  constructor(context) {
    this.element = document.createElement("DIV")
    context.appendChild(this.element)
  }

  update(content: number) {
    if(!content) {
      this.element.innerHTML = "no input"
    } else {
      this.element.innerHTML = content.toString()
    }
  }
}

export = UIElement