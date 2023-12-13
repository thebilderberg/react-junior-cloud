import "./ListerComponent.css";
import { DeleteOutlined, DollarOutlined, StarOutlined } from '@ant-design/icons';

function ListerComponent(props) {
        const { name, salary, onDelete, onSalarySwitch, onStarSwitch } = props
        const {status, star} = props
        let classes = "ListerComponent";
        let starIconClass = "incognitoStarIconClass"

        if (status) {
            classes += " dollar";
        }

        if (star) {
            starIconClass = "offIncognitoStarIconClass";
        }

        return(
            <div className={classes}>
                <div onClick={()=>onStarSwitch()}>{name}</div>
                <div>${salary}</div>
                <div><DollarOutlined onClick={()=>onSalarySwitch()} /></div>
                <div><DeleteOutlined onClick={()=>onDelete()}/></div>
                <div className={starIconClass}><StarOutlined /></div>
            </div>
        );
    }

export default ListerComponent;