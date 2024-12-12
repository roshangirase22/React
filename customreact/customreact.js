
// je aapn vita-src = app.js madhe html element(html tag) banvun export karto -- ani main.js madhe import karto te element te pn tr basically function ch ahet 
const maincontainer = document.querySelector("#root")


// je html tag (element) import krto tr te behind the seen te compile krun React la kas dist ,kas kaam kart-= ex .assume- a tag ghetl (hr sarv behind react madhe tree banvt element ch object madhe)
const reactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: 'blank'
    },
    Children:'click me to visit google'
}



/*function customRender(customRender , maincontainer) { // design custom render for rendering 

    const domElement = document.createElement(reactElement.type) // reactelement.type khali ahe bhag object madhe -a ahe na
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href',reactElement.props.href )
    domElement.setAttribute('target' , reactElement.props.target)

    maincontainer.appendChild(domElement)
} // attribute set ek ek set karv lagt tya peksha loop base code lihu  madhe taku */


// loop base banvu
const domElement = document.createElement(reactElement.type) // reactelement.type khali ahe bhag object madhe -a ahe na
    domElement.innerHTML = reactElement.Children
    for (const prop in reactElement.props) {
        // if (prop == 'Children') continue ; // as kadhi ast property object madhe achnak children yeto tr tyla skip karyla.
        domElement.setAttribute(prop , reactElement.props [prop])
    }
maincontainer.appendChild(domElement)

// a tag  render karycha vita madhe react ch sotach hot ikde banvav lagt
customRender(reactElement , maincontainer) // he cunstomrender aapn banvu vrti




