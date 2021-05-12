import { getOrders, getMetals, getSizes, getStyles } from "./database.js"


const buildOrderListItem = (order) => {
    const metals = getMetals()
    const sizes = getSizes()
    const styles = getStyles()

    // Remember that the function you pass to find() must return true/false
    //Function to find the price of the metal
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const metalCost = foundMetal.price

    //Function to find the price of the size
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    const sizeCost = foundSize.price

    //Function to find the price of the style
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    const styleCost = foundStyle.price


    const totalCost = styleCost + sizeCost + metalCost

    return `<li>
        Order #${order.id} was placed on ${order.timestamp} and costs $${totalCost}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

<<<<<<< HEAD
 
=======
  
>>>>>>> eed41995749b7df21581c584c731a32ddf447ed5
