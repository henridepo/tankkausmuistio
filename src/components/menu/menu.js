import { Link } from 'react-router-dom';
import styles from './menu.module.scss';
import { TiCog, TiChartLine, TiThList } from 'react-icons/ti';
import { Tooltip } from "@mui/material";
//import { padding } from '@mui/system';

const menustyle = { color: "white", fontSize: "1.6em" };
  
function Menu() {
    return (

<div className={styles.menu}>
    <div><Tooltip title=
    {<span style={{ fontSize: "14px", color: "white", backgroundColor: "grey", borderRadius: "3px", paddingLeft: "9px", paddingRight: "9px" }}>Etusivu</span>}>
    <Link to="/"><TiThList style={menustyle}/></Link></Tooltip></div>
    
    <div><Tooltip title=
    {<span style={{ fontSize: "14px", color: "white", backgroundColor: "grey", borderRadius: "3px", paddingLeft: "9px", paddingRight: "9px" }}>Statistiikat</span>}>
    <Link to="/stats"><TiChartLine  style={menustyle}/></Link></Tooltip></div>
    
    <div><Tooltip title=
    {<span style={{ fontSize: "14px", color: "white", backgroundColor: "grey", borderRadius: "3px", paddingLeft: "9px", paddingRight: "9px" }}>Asetukset</span>}>
    <Link to="/settings"><TiCog  style={menustyle}/></Link></Tooltip></div>
    </div>
    );
}

export default Menu;