import react from "react";
import Home from "../modules/Menu1/index";
import Organization from "../modules/Menu2";
import Rti from "../modules/Menu3/index";
import Events from "../modules/Menu4/SubMenu1/index";
import ContactUs from "../modules/Menu5/index";
import Map from "../modules/Menu5/map";
import Webpolicies from "../Components/Footer/webpolicies";
import Help from "../Components/Footer/help";
import Notifications from "../Components/Notifications/notification";
import Error from "../Components/Error/error";
import Images from "../Components/Gallery/Images";
import SiteMap from "../modules/SiteMap/sitemap";
import About from "../Components/About/About";

const routesConfig = [
  {
    path: "/nicapsc-noc/nochome",
    component: Home,    
  },
  {
    path: "/nicapsc-noc/nocorganization/",
    component: Organization,
  },
  {
    path: "/nicapsc-noc/nocrti",
    component: Rti,
  },
  {
    path: "/nicapsc-noc/nocannouncements/nocevents",
    component: Events,
  },
  {
    path: "/nicapsc-noc/nocnotifications",
    component: Notifications,
  },
  {
    path: "/nicapsc-noc/nocwebsitepolicies",
    component: Webpolicies,
  },
  {
    path: "/nicapsc-noc/nochelp",
    component: Help,
  },
  {
    path: "/nicapsc-noc/noccontact",
    component: ContactUs,
  },
  {
    path: "/nicapsc-noc/nocmap",
    component: Map,
  },
  {
    path: "/nicapsc-noc/nocerror",
    component: Error,
  },
  {
    path: "/nicapsc-noc/nocimages",
    component: Images,
  },
  {
    path: "/nicapsc-noc/nocsitemap",
    component: SiteMap,
  },
  {
    path: "/nicapsc-noc/nocabout",
    component: About,
  },
];

export default routesConfig;
