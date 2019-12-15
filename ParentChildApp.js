import React from "react"

import Header from "./ReactParentChildComponent/Header"
import MainContent from "./ReactParentChildComponent/MainContent"
import Footer from "./ReactParentChildComponent/Footer"

function ParentChildApp() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default ParentChildApp