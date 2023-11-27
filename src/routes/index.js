import { HeaderOnly } from "../components/layout"
import Home from "../pages/Home"
import Following from "../pages/Following"
import Proflies from "../pages/Profiles"
import Upload from "../pages/UpLoad"
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/profiles', component: Proflies},
    {path: '/upload', component: Upload, layout: HeaderOnly},
   
]

const privateRoutes = [
    
]

export {publicRoutes, privateRoutes}

