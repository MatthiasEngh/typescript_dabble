class UIElement {
  element

  constructor(context) {
    this.element = document.createElement("DIV")
    context.appendChild(this.element)
  }

  update(content: number) {
    if(content == null) {
      this.element.innerHTML = "!"
    } else {
      this.element.innerHTML = content.toString()
    }
  }
}

export = UIElement