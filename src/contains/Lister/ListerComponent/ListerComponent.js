import "./ListerComponent.css";
import { DeleteOutlined, DollarOutlined, StarOutlined } from '@ant-design/icons';

function ListerComponent(props) {
        const { name, salary, onDelete, onSwitch } = props
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
                <div onClick={onSwitch} switch-option="star">{name}</div>
                <div>${salary}</div>
                <div><DollarOutlined switch-option="status" onClick={onSwitch}/></div>
                <div><DeleteOutlined onClick={()=>onDelete()}/></div>
                <div className={starIconClass}><StarOutlined /></div>
            </div>
        );
    }

export default ListerComponent;