let posts = []
const btnText = document.querySelector("#btn-text")
const alert = document.querySelector("#alert")
const searchResult = document.querySelector("#search-result")
const tableBody = document.querySelector("#table-body")
const searchButton = document.querySelector("#search-button")

const focusCell = (prevCell, nextCell) => {
    prevCell.setAttribute("tabindex", "-1")
    nextCell.setAttribute("tabindex", "0")
    nextCell.focus()
}

const cellKeydownHandler = (event) => {
    const currentElement = event.target
    switch (event.key) {

        case "ArrowUp": {
            event.preventDefault()

            if (currentElement.parentElement.parentElement.previousElementSibling) {
                let index = Array.prototype.slice.call(currentElement.parentElement.parentElement.children).indexOf(currentElement.parentElement)
                let nextUpCell = currentElement.parentElement.parentElement.previousElementSibling ? currentElement.parentElement.parentElement.previousElementSibling.children[index] : null

                if (nextUpCell)
                    if (nextUpCell.childElementCount > 0)
                        focusCell(currentElement, nextUpCell.children[0])
                    else
                        focusCell(currentElement, nextUpCell)
                //console.log(currentElement, nextUpCell.children[0])

            }
            break
        }
        case "ArrowDown": {
            event.preventDefault()

            if (currentElement.parentElement.parentElement.nextElementSibling) {
                let index = Array.prototype.slice.call(currentElement.parentElement.parentElement.children).indexOf(currentElement.parentElement)
                let nextDownCell = currentElement.parentElement.parentElement.nextElementSibling ? currentElement.parentElement.parentElement.nextElementSibling.children[index] : null



                if (nextDownCell)
                    if (nextDownCell.childElementCount > 0)
                        focusCell(currentElement, nextDownCell.children[0])
                    else
                        focusCell(currentElement, nextDownCell)
            }
            break

        }

        case "ArrowRight": {
            event.preventDefault()
            if (currentElement.parentElement.nextElementSibling) {
                let nextCellRight = currentElement.parentElement.nextElementSibling

                if (nextCellRight.childElementCount > 0)
                    focusCell(currentElement, nextCellRight.children[0])
                else
                    focusCell(currentElement, nextCellRight)
            }
            break
        }

        case "ArrowLeft": {
            event.preventDefault()
            if (currentElement.parentElement.previousElementSibling) {
                let nextCellLeft = currentElement.parentElement.previousElementSibling


                if (nextCellLeft.childElementCount > 0)
                    focusCell(currentElement, nextCellLeft.children[0])
                else
                    focusCell(currentElement, nextCellLeft)
            }
            break
        }

        case "Home": {
            event.preventDefault()
            focusCell(currentElement, currentElement.parentElement.parentElement.children[0].firstChild)
            break
        }
        case "End": {
            event.preventDefault()
            focusCell(currentElement, currentElement.parentElement.parentElement.children[6].firstChild)

            break
        }

    }
}

