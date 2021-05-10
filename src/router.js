import {createRouter,createWebHistory} from 'vue-router'
import MarvelHeros from "@/pages/MarvelHeros";
import Calendar from "@/pages/Calendar";
import Home from "@/pages/Home";
import Markdown from "@/pages/Markdown";
import Slider from "@/pages/Slider";
import Calculator from "@/pages/Calculator";
import ReuseableModal from "@/pages/ReuseableModal";
import Chats from "@/pages/Chats";
import UserCrud from "@/pages/UserCrud";
import TensorFlow from "@/pages/TensorFlow";
import store from "./store/index";
const routes = [
    {path : '/' ,component: Home},
    {path : '/marvel-heros',component:MarvelHeros},
    {path : '/calender' ,component: Calendar},
    {path : '/markdown' ,component: Markdown},
    {path : '/slider' ,component: Slider},
    {path : '/calculator' ,component: Calculator},
    {path : '/reuseable-modal' ,component: ReuseableModal, meta: { middleware: "auth" },},
    {path : '/chats' ,component: Chats,   meta: { middleware: "auth" },},
    {path : '/user-crud' ,component: UserCrud},
    {path : '/tensorflow' ,component: TensorFlow},
]
const router = createRouter({
    history:createWebHistory(),
    routes,
});

router.beforeEach((to, _, next) => {
    if (to.meta.middleware) {
        const middleware = require(`./middleware/${to.meta.middleware}`);
        if (middleware) {
            middleware.default(next, store);
        } else {
            next();
        }
    } else {
        next();
    }
});

export default  router;